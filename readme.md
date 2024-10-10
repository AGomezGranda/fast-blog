# Fast blog

This is a blog application built with FastAPI and React. It uses PostgreSQL as the database.
The blog posts are created with markdown.

You can find the frontend code in the `frontend` directory and the backend code in the `backend` directory. It can be deployed with docker-compose.

## Features

- Create, read, update, and delete blog posts. Comments and categories can be added to posts
- Markdown editor, using `markdoc` for rendering
- User authentication, registration, and login. Use of JWT for authentication

## Stack

- FastAPI
- React
- PostgreSQL
- MarkDoc

## Installation

1. Clone the repository
2. Create a `.env` file in the `backend` directory with the following variables:

```
DATABASE_URL=postgresql://user:password@localhost/blog
SECRET_KEY=your_secret_key
```
