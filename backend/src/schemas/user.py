from pydantic import BaseModel, EmailStr
from typing import List

# from src.models.posts import Posts

class UserBase(BaseModel):
    email: EmailStr
    username: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    uuid: str
    is_active: bool
    is_superuser: bool
    created_at: str
    # posts: List[Posts] = []

    class Config:
        orm_mode = True
        
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: str = None
    username: str = None
    is_superuser: bool = None