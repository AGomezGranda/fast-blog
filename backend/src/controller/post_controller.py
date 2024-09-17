from sqlalchemy.orm import Session
from src.models.posts import Post
from src.schemas.posts import PostCreate


def get_all_posts(db: Session):
    return db.query(Post).all()


def get_post_by_uuid(db: Session, post_uuid: str):
    return db.query(Post).filter(Post.uuid == post_uuid).first()


def create_post(db: Session, post_in: PostCreate, current_user):
    post = Post(**post_in.dict(), author_id=current_user.uuid)
    db.add(post)
    db.commit()
    db.refresh(post)
    return post


def update_post(db: Session, db_post: Post, post_in: PostCreate):
    db_post.title = post_in.title
    db_post.content = post_in.content
    db.commit()
    db.refresh(db_post)
    return db_post


def delete_post(db: Session, post: Post):
    db.delete(post)
    db.commit()
    return
