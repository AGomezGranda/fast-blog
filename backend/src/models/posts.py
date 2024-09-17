from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid

from src.db.database import Base

class Posts(Base):
    __tablename__ = 'posts'

    uuid = Column(String, primary_key=True, default=uuid.uuid4, index=True)
    title = Column(String, index=True)
    content = Column(Text)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now)

    # relationship
    author = relationship("User", back_populates="posts")
    category = relationship(
        "Category",
        secondary='post_category_association',
        back_populates="posts"
    )
    comments = relationship("Comment", back_populates="post")
