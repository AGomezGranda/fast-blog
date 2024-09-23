from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship

from db.database import Base

post_category_association = Table(
    'post_category_association',
    Base.metadata,
    Column('post_id', ForeignKey('posts.uuid'), primary_key=True),
    Column('category_id', ForeignKey('categories.id'), primary_key=True)
)

class Category(Base):
    __tablename__ = 'categories'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, unique=True)

    # relationship
    posts = relationship("Posts",
                         secondary=post_category_association,
                         back_populates="category")

