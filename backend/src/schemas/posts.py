from pydantic import BaseModel
from datetime import datetime
from uuid import UUID


class BlogPostBase(BaseModel):
    title: str
    description: str
    content: str

class BlogPostCreate(BlogPostBase):
    pass

class BlogPost(BlogPostBase):
    uuid: str
    author_id: str
    created_at: str
    updated_at: str

    class Config:
        orm_mode = True


class BlogPostResponse(BaseModel):
    uuid: UUID # Cambia el tipo a string
    author_id: UUID  # Cambia el tipo a string
    created_at: datetime  # Cambia el tipo a string
    updated_at: datetime  # Cambia el tipo a string
    title: str
    description: str
    content: str
