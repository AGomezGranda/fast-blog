from fastapi import APIRouter
#endpoints auth, blogs
from src.api.endpoints import auth, posts, users

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth" ,tags=["auth"])
api_router.include_router(posts.router, prefix="/posts", tags=["posts"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
