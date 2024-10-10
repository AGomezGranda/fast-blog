# Fast blog

This is a blog application built with FastAPI and React. It uses PostgreSQL as the database.
The blog posts are created with markdown.

You can find the frontend code in the `frontend` directory and the backend code in the `backend` directory. It can be deployed with docker-compose.

## Features

- Create, read, update, and delete blog posts. Comments and categories can be added to posts
- Markdown editor, using `markdoc` for rendering
- User authentication, registration, and login. Use of JWT for authentication

## Stack

- FastAPI (Python3)
- React (TypeScript)
- PostgreSQL
- MarkDoc

## Installation

1. Clone the repository
2. Create a `.env` file in the `backend` directory with the following variables:

    ```bash
    SECRET_KEY="your_secret_key"
    ALGORITHM="HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES=30
    DB_USER="your_db_user"
    DB_PASSWORD="your_db_password"
    DB_HOST="your_db_host"
    DB_PORT="your_db_port"
    DB_NAME="your_db_name"
    ```

3. Execute the backend (in deployment mode):

    ```bash
    cd backend
    fastapi dev main.py
    ```

4. Execute the frontend:

    ```bash
    cd frontend
    npm start # or yarn start
    ```

5. Access the application at `http://localhost:5173`
