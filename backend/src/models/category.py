from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship
from src.db.database import Base
# from src.models.association import post_category_association

class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, unique=True)

    # relationship
    posts = relationship("Posts", secondary='post_category_association', back_populates="categories")

