from sqlalchemy import Column, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid

from src.db.database import Base
from src.models.association import post_category_association  # Import the association table

class Posts(Base):
    __tablename__ = 'posts'

    # uuid = Column(String, primary_key=True, default=uuid.uuid4, index=True)
    uuid = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    title = Column(String, index=True)
    content = Column(Text)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now)
    author_id = Column(UUID, ForeignKey('users.uuid'))

    author = relationship("User", back_populates="posts")
    categories = relationship(
        "Category",
        secondary=post_category_association,
        back_populates="posts"
    )
    comments = relationship("Comment", back_populates="post")
