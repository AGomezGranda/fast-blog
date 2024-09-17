import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    PROJECT_NAME: str = "FastAPI Blog"
    PROJECT_VERSION: str = "0.1.0"
    API_PREFIX: str = "/api"
    SECRET_KEY: str = os.getenv("SECRET_KEY", "supersecretkey")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # one week


settings = Config()
