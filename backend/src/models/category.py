from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship

from db.database import Base


class Category(Base):
    __tablename__ = 'categories'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, unique=True)
    description = Column(String)
    parent_id = Column(Integer, ForeignKey('categories.id'))

    # relationship
    children = relationship("Category")
    posts = relationship("Posts", back_populates="category")


post_category_association = Table(
    'post_category', Base.metadata,
    Column('post_id', Integer, ForeignKey('posts.id'), primary_key=True),
    Column('category_id', Integer, ForeignKey(
        'categories.id'), primary_key=True)
)
