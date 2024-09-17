from typing import Union
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from src.api.api import api_router

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api")

@app.get("/")
def read_root():
    return {
        "message": "Welcome to fast blog"
    }
