from fastapi import Depends

from src.controller.user_controller import get_current_user
from src.models.user import User

from fastapi import APIRouter

router = APIRouter()

@router.get("/me")
def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user
