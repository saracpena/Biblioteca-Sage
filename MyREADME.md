# Project Roadmap

## Phase 1 - Project Setup
- [ ] Install dependencies
- [ ] Configure React Router
- [ ] Create folder structure
- [ ] Create Layout
- [ ] Create Navbar
- [ ] Create page components

---

## Phase 2 - Public Features
- [ ] Display all books
- [ ] Display individual book
- [ ] Loading states
- [ ] Error handling

---

## Phase 3 - Authentication
- [ ] Register
- [ ] Login
- [ ] Persist token
- [ ] Logout
- [ ] Restore session

---

## Phase 4 - Account
- [ ] Fetch current user
- [ ] Display profile
- [ ] Display reservations

---

## Phase 5 - Reservations
- [ ] Reserve book
- [ ] Disable unavailable books
- [ ] Return reservation

---

## Phase 6 - Polish
- [ ] Better styling
- [ ] Better loading UX
- [ ] Better error messages
- [ ] Responsive design

# Assignment Rubric

| Requirement | Status |
|-------------|--------|
| Pull Request | ☐ |
| View Catalog | ☐ |
| View Book Details | ☐ |
| Register | ☐ |
| Login | ☐ |
| Reserve Book | ☐ |
| Prevent Reserving Unavailable Book | ☐ |
| Profile Page | ☐ |
| View Reservations | ☐ |
| Return Book | ☐ |
| React Router | ☐ |

# Development Journal

## Day 1

### What I built

- Routing
- Layout
- Navbar

### What I learned

- Why BrowserRouter belongs in main.jsx
- Difference between Link and NavLink
- Why Outlet renders child routes

### Problems

- Forgot to wrap App in BrowserRouter
- Route paths weren't matching

### Solution

Used nested routes and Layout component.

---

## Day 2

### Built

Book catalog

### Learned

useEffect only runs when dependencies change.

### Questions

Need to better understand async/await.

# API Endpoints

GET /books

Returns every book.

---

GET /books/:id

Returns one book.

---

POST /users/register

Body

{
    firstName,
    lastName,
    email,
    password
}

Returns

{
    message,
    token,
    user
}

---

POST /users/login

Body

{
    email,
    password
}

Returns

{
    message,
    token
}

---

GET /users/me

Authorization Required

Returns

{
    id,
    firstname,
    lastname,
    email,
    reservations
}

# React Concepts Practiced

## Components

✔ Functional Components

---

## Props

✔ Passing data to children

---

## State

✔ useState

---

## Side Effects

✔ useEffect

---

## Routing

✔ BrowserRouter
✔ Routes
✔ Route
✔ Outlet
✔ useNavigate
✔ useParams
✔ Link
✔ NavLink

---

## Context

✔ AuthContext

---

## Forms

✔ Controlled Inputs

---

## HTTP

✔ Axios

✔ Fetch

---

## Authentication

✔ JWT Token
✔ Authorization Header
✔ Local Storage

# Architecture Decisions

## Why Context?

Authentication is needed by multiple unrelated components.

Instead of passing props through several layers, AuthContext stores:

- Token
- User
- Login
- Logout
- Refresh User

---

## Why Axios?

Axios simplifies

- Authorization headers
- JSON handling
- Error handling

Fetch versions are also implemented separately for practice.

---

## Why Local State?

Books are only needed inside BooksPage.

Keeping state local reduces unnecessary re-renders.

# Packages Installed

react-router-dom

Purpose

Routing

Installed

npm install react-router-dom

---

axios

Purpose

HTTP requests

Installed

npm install axios

---

Tailwind CSS (Stretch Goal)

Purpose

Utility-first CSS framework