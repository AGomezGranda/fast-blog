from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from src.controller.user_controller import authenticate_user, create_user, get_user_by_email
from src.db.database import get_db
from src.auth.jwt_utils import create_access_token
from src.schemas.user import Token, UserCreate, UserBase

router = APIRouter()

#register
@router.post("/register", response_model=Token)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    user = get_user_by_email(db, email=user_in.email)
    if user:
        raise HTTPException(status_code=400, detail="Email already registered")
    user = create_user(db, user_in)
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

#login
@router.post("/login", response_model=Token)
def login(user_data: UserBase, db: Session = Depends(get_db)):
    user = authenticate_user(db, user_data.email, user_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}
