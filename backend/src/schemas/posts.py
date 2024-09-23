from pydantic import BaseModel


class BlogPostBase(BaseModel):
    title: str
    content: str


class BlogPostCreate(BlogPostBase):
    pass


class BlogPost(BlogPostBase):
    uuid: str
    author: str
    created_at: str
    updated_at: str

    class Config:
        orm_mode = True
