from sqlalchemy import Column, DateTime, ForeignKey, String, Text
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid
from db.database import Base


class Comment(Base):
    __tablename__ = 'comments'

    uuid = Column(String, primary_key=True, default=uuid.uuid4, index=True)
    content = Column(Text)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now)

    # relationship
    author_id = Column(String, ForeignKey('users.uuid'))
    post_id = Column(String, ForeignKey('posts.uuid'))
    author = relationship("User", back_populates="comments")
    post = relationship("Posts", back_populates="comments")
