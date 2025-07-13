# 📡 API Endpoints Overview

A list of all available API routes.

---

## 🔐 Auth Endpoints

- `POST /auth/register` — Create a new user account
- `POST /auth/login` — Login with email and password
- `POST /auth/google` — Login with Google OAuth
- `GET /auth/me` — Get the currently authenticated user's info

---

## 📁 File Endpoints

- `POST /upload` — Upload a file (authenticated or guest)
- `GET /file/:id` — Download a file by its ID (public)
- `GET /my-files` — Get the authenticated user's uploaded files
