from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from src.schemas.posts import PostCreate, Post, PostUpdate

from src.db.database import get_db

router = APIRouter()

#create post, requires auth
@router.post("/", response_model=Post)
def create_post(post: PostCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return create_post()

