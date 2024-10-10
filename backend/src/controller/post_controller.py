from sqlalchemy.orm import Session
from src.models.user import User
from src.models.posts import Posts
from src.schemas.posts import BlogPostBase

def get_all_posts(db: Session):
    return db.query(Posts).all() # Use Post model because we are querying the Post table


def get_post_by_uuid(db: Session, post_uuid: str):
    # Use Post model because we are querying the Post table
    return db.query(Posts).filter(Posts.uuid == post_uuid).first()

def get_post_by_user(db: Session, current_user: User):
    # Use Post model because we are querying the Post table
    return db.query(Posts).filter(Posts.author_id == current_user.uuid).all()

def create_post_controller(post_in: BlogPostBase, db: Session, current_user):

    # Use BlogPostCreate schema because we are creating a new post, and we need to validate the input
    # Use Post model because we are creating a new post, and we need to insert the data into the Post table

    post = Posts(**post_in.model_dump(), author_id=current_user.uuid)
    db.add(post)
    db.commit()
    db.refresh(post)
    return post


def update_post(db: Session, db_post: Posts, post_in: BlogPostBase):
    db_post.title = post_in.title
    db_post.description = post_in.description
    db_post.content = post_in.content
    db.commit()
    db.refresh(db_post)
    return db_post


def delete_post_controller(db: Session, db_post: Posts):
    db.delete(db_post)
    db.commit()
    return
