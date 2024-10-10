from typing import List
from fastapi import Depends

from src.controller.post_controller import get_post_by_user
from src.db.database import get_db
from src.schemas.posts import BlogPostResponse
from src.controller.user_controller import get_current_user
from src.models.user import User
from sqlalchemy.orm import Session

from fastapi import APIRouter

router = APIRouter()

@router.get("/me")
def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user

#posts of the user ${user_id}
# get post by username

@router.get("/{author_id}/posts", response_model=List[BlogPostResponse])
def get_posts_by_author_id(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return get_post_by_user(db, current_user)
