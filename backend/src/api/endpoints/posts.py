from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from src.controller.post_controller import delete_post_controller, get_all_posts, get_post_by_user, get_post_by_uuid, create_post_controller
from src.controller.user_controller import get_current_user
from src.models.user import User
from src.schemas.posts import BlogPost, BlogPostBase, BlogPostResponse

from src.db.database import get_db

router = APIRouter()

#create post, requires auth

@router.post("/", response_model=BlogPostResponse)
def create_post(post_in: BlogPostBase, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return create_post_controller(post_in, db, current_user)

#get posts

@router.get("/", response_model=List[BlogPostResponse])
def get_posts(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return get_all_posts(db, current_user)

#get post by uuid

@router.get("/{uuid}", response_model=BlogPostResponse)
def get_post(uuid: str, db : Session = Depends(get_db)):
    post = get_post_by_uuid(db, uuid)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post


#update post by uuid

@router.put("/{uuid}", response_model=BlogPost)
def update_post(uuid: str, post_in: BlogPostBase, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    post = get_post_by_uuid(db, uuid)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    if post.author_id != current_user.uuid:
        raise HTTPException(status_code=403, detail="Not authorized to update post")
    return update_post(db, post, post_in)


#delete post by uuid

@router.delete("/{uuid}")
def delete_post(uuid: str, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    post = get_post_by_uuid(db, uuid)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    if post.author_id != current_user.uuid:
        raise HTTPException(status_code=403, detail="Not authorized to delete post")
    delete_post_controller(db, post)
    return {"detail": "Post deleted"}
