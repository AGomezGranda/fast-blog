from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from src.controller.post_controller import get_all_posts, get_post_by_uuid, create_post, update_post, delete_post
from src.controller.user_controller import get_current_user
from src.models.user import User
from src.schemas.posts import BlogPost, BlogPostCreate, BlogPostBase

from src.db.database import get_db

router = APIRouter()

#create post, requires auth


@router.post("/", response_model=BlogPost)
def create_post(post_in: BlogPostCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return create_post(db, post_in, current_user)

#get posts


@router.get("/", response_model=List[BlogPost])
def get_posts(db: Session = Depends(get_db)):
    return get_all_posts(db)

#get post by uuid


@router.get("/{uuid}", response_model=BlogPost)
def get_post(post_uuid: str, db : Session = Depends(get_db)):
    post = get_post_by_uuid(db, post_uuid)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

#update post by uuid


@router.put("/{uuid}", response_model=BlogPost)
def update_post(post_uuid: str, post_in: BlogPostCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    post = get_post_by_uuid(db, post_uuid)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    if post.author_id != current_user.uuid:
        raise HTTPException(status_code=403, detail="Not authorized to update post")
    return update_post(db, post, post_in)

#delete post by uuid
@router.delete("/{uuid}")
def delete_post(post_uuid: str, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    post = get_post_by_uuid(db, post_uuid)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    if post.author_id != current_user.uuid:
        raise HTTPException(status_code=403, detail="Not authorized to delete post")
    delete_post(db, post)
    return {"detail": "Post deleted"}



