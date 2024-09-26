from sqlalchemy import Column, String, Boolean, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid

from src.db.database import Base


class User(Base):
    __tablename__ = 'users'

    # uuid = Column(String, primary_key=True, default=uuid.uuid4, index=True)
    uuid = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)  # Usar UUID en lugar de String
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.now)

    # relationship
    posts = relationship("Posts", back_populates="author")
    comments = relationship("Comment", back_populates="author")
