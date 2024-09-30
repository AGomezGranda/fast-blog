from sqlalchemy import Column, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from src.db.database import Base
from datetime import datetime
import uuid


class Comment(Base):
    __tablename__ = 'comments'

    # uuid = Column(String, primary_key=True, default=lambda: str(uuid4()), index=True)
    uuid = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    content = Column(Text)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now)

    # Foreign keys
    author_id = Column(UUID(as_uuid=True), ForeignKey('users.uuid'))
    post_id = Column(UUID(as_uuid=True), ForeignKey('posts.uuid'))

    # Relationships
    author = relationship("User", back_populates="comments")
    post = relationship("Posts", back_populates="comments")
