from sqlalchemy import Table, Column, String, ForeignKey, Integer
from src.models import category, posts
from src.db.database import Base
from sqlalchemy.dialects.postgresql import UUID

# Intermediate table for many-to-many relationship
post_category_association = Table(
    'post_category_association',
    Base.metadata,
    Column('post_id', UUID, ForeignKey('posts.uuid'), primary_key=True),
    Column('category_id', Integer, ForeignKey('categories.id'), primary_key=True)
)
