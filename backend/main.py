from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from src.api.api import api_router

from src.db.database import Base, engine

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

# Create database tables
Base.metadata.create_all(bind=engine)
