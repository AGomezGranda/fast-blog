from pydantic import BaseModel


class BlogPost(BaseModel):
    uuid: str
    author: str
    created_at: str
    updated_at: str

    class Config:
        orm_mode = True


class BlogPostCreate(BlogPost):
    title: str
    content: str
