import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    PROJECT_NAME: str = "FastAPI Blog"
    PROJECT_VERSION: str = "0.1.0"
    API_PREFIX: str = "/api"


settings = Config()
