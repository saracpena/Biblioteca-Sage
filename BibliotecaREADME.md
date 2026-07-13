# Biblioteca Sage

## Overview

Biblioteca Sage is a React Single Page Application (SPA) that allows users to browse a library catalog and view individual books. Visitors can explore the catalog without an account, but users must register or log in before they can reserve books.

Once authenticated, users can:

* Reserve available books
* View their profile
* View all of their reserved books
* Return books they have finished reading
* Log out

The purpose of this project is to practice building a complete React application that communicates with a REST API while reinforcing concepts such as routing, authentication, state management, and component architecture.

---

# Assignment Requirements

### Public Users

* View all books
* View a single book
* Register
* Login

### Authenticated Users

* Reserve an available book
* View profile information
* View reserved books
* Return reserved books
* Logout

---

# Build Roadmap

## Phase 1 - Foundation

* [ ] Install dependencies
* [ ] Configure React Router
* [ ] Create folder structure
* [ ] Create Layout
* [ ] Create Navbar
* [ ] Create application pages

## Phase 2 - Public Features

* [ ] Display all books
* [ ] Display individual book
* [ ] Loading state
* [ ] Error handling

## Phase 3 - Authentication

* [ ] Register
* [ ] Login
* [ ] Store authentication token
* [ ] Restore session
* [ ] Logout

## Phase 4 - Account

* [ ] Display current user
* [ ] Display reservations

## Phase 5 - Reservations

* [ ] Reserve book
* [ ] Prevent reserving unavailable books
* [ ] Return book

---

# Project Setup

Before building the application, a few dependencies need to be installed.

## React Router

```bash
npm install react-router-dom
```

React Router allows the application to navigate between pages without refreshing the browser.

We'll use:

* BrowserRouter
* Routes
* Route
* NavLink
* Outlet
* useNavigate
* useParams

---

## Axios

```bash
npm install axios
```

Axios is responsible for communicating with the Library API.

Every request made by this application—including retrieving books, registering users, logging in, reserving books, and returning books—will be sent using Axios.

---

# Understanding the API

The React application is responsible for displaying information.

The API is responsible for storing and returning information.

Most of the application communicates with three endpoint groups.

---

## Books

Used to retrieve library information.

```text
GET /books
```

Returns every book in the catalog.

```text
GET /books/:id
```

Returns one specific book.

---

## Users

Responsible for authentication.

```text
POST /users/register
```

Creates a new account.

```text
POST /users/login
```

Authenticates an existing account.

```text
GET /users/me
```

Returns the currently authenticated user.

This endpoint requires the authentication token received after logging in.

---

## Reservations

Responsible for checking books in and out.

```text
POST /reservations
```

Creates a reservation.

```text
DELETE /reservations/:reservationId
```

Returns a reserved book.

---

# Building the Application

## main.jsx

### Purpose

Everything begins here.

`main.jsx` is responsible for rendering the React application into the browser.

This is also where the application is wrapped with `<BrowserRouter>`, allowing every component to use React Router.

### Responsibilities

* Render the React application
* Configure BrowserRouter

### Uses

* BrowserRouter
* App.jsx

---

## App.jsx

### Purpose

App is the application's traffic controller.

Its responsibility is deciding **which page should be displayed** based on the current URL.

App intentionally does **not** fetch books or handle authentication.

### Responsibilities

* Define every route
* Connect URLs to pages
* Render the Layout component

### Uses

* Routes
* Route
* Layout.jsx

### Connected Pages

* BooksPage
* BookDetailsPage
* RegisterPage
* LoginPage
* AccountPage

---

## Layout.jsx

### Purpose

Layout creates the application's shared structure.

The Navbar belongs here because it should remain visible regardless of which page the user is viewing.

Instead of placing a Navbar inside every page, Layout renders it once and uses `<Outlet />` to display whichever page React Router matches.

### Responsibilities

* Render Navbar
* Provide consistent page layout
* Display child routes through Outlet

### Uses

* Navbar.jsx
* Outlet

### Used By

* App.jsx

---

## Navbar.jsx

### Purpose

The Navbar allows users to navigate throughout the application.

As authentication changes, the Navbar changes with it.

When logged out:

* Home
* Books
* Register
* Login

When logged in:

* Home
* Books
* Account
* Logout

Using NavLink also makes it easy to identify which page is currently active.

---

## BooksPage.jsx

### Purpose

BooksPage displays the library catalog.

When the component loads, it retrieves every book from the API and stores the results in state.

Each book is then rendered as a reusable BookCard component.

### Responsibilities

* Retrieve books
* Store books in state
* Display loading state
* Display errors
* Render BookCards

### API Used

```text
GET /books
```

### Uses

* useState
* useEffect
* Axios
* BookCard

---

## BookCard.jsx

### Purpose

BookCard displays one individual book.

BooksPage is responsible for retrieving the data.

BookCard is responsible for displaying the data.

Separating these responsibilities keeps both components focused on a single task.

### Responsibilities

* Display title
* Display author
* Display availability
* Link to BookDetailsPage

### Used By

* BooksPage

---

## BookDetailsPage.jsx

### Purpose

Displays one specific book.

The book id comes directly from the URL using `useParams()`.

Example:

```text
/books/12

↓

id = 12

↓

GET /books/12
```

If the user is authenticated and the book is available, this page also displays the Reserve button.

### Responsibilities

* Retrieve one book
* Display detailed information
* Allow reservations
* Disable reservation button when unavailable

### API Used

```text
GET /books/:id

POST /reservations
```

### Uses

* useParams
* useEffect
* Axios

---

## AuthContext.jsx

### Purpose

Authentication information is needed by several different components.

Rather than passing the user and token through props, AuthContext stores them in one place.

Components such as Navbar, LoginPage, RegisterPage, BookDetailsPage, and AccountPage can all access the same authentication information.

### Stores

* token
* current user
* login
* logout
* refreshUser

### Used By

* Navbar
* LoginPage
* RegisterPage
* AccountPage
* BookDetailsPage

---

## RegisterPage.jsx

### Purpose

Allows new users to create an account.

After registration succeeds, the returned token is stored and the current user's profile is retrieved.

### API Used

```text
POST /users/register

↓

GET /users/me
```

### Responsibilities

* Display registration form
* Create account
* Authenticate user
* Redirect to Account page

---

## LoginPage.jsx

### Purpose

Authenticates an existing user.

After login succeeds, the token is stored and the current user's information is retrieved.

### API Used

```text
POST /users/login

↓

GET /users/me
```

### Responsibilities

* Display login form
* Authenticate user
* Store token
* Redirect to Account page

---

## AccountPage.jsx

### Purpose

Displays information about the currently logged-in user.

This page also displays every book currently reserved by the user.

Each reservation includes a Return button.

### Responsibilities

* Display profile
* Display reservations
* Return reserved books

### API Used

```text
GET /users/me

DELETE /reservations/:reservationId
```

---

# Data Flow

## Loading Books

```text
BooksPage

↓

GET /books

↓

API

↓

Book Array

↓

setBooks()

↓

BookCards Render
```

---

## Login

```text
User submits form

↓

POST /users/login

↓

Receive Token

↓

Store Token

↓

GET /users/me

↓

Store User

↓

Navigate to Account
```

---

## Reserving a Book

```text
Reserve Button

↓

POST /reservations

↓

Reservation Created

↓

Refresh User

↓

Updated Reservation List
```

---

## Returning a Book

```text
Return Button

↓

DELETE /reservations/:reservationId

↓

Reservation Removed

↓

Refresh User
```

---

# React Concepts Used

## useState

Used whenever information changes during the application's lifetime.

Examples:

* books
* user
* token
* form values
* loading states
* reservations

---

## useEffect

Used whenever the application needs to retrieve data after a component renders.

Examples:

* Loading books
* Loading one book
* Loading the authenticated user

---

## React Router

Responsible for navigation throughout the application.

Implemented using:

* BrowserRouter
* Routes
* Route
* NavLink
* Outlet
* useNavigate
* useParams

---

## Context API

Used to share authentication throughout the application without passing props through multiple components.

---

## Axios

Used for every request sent to the Library API.

Keeping API requests organized makes the application easier to maintain as it grows.

---

# Packages Installed

## react-router-dom

Purpose

Application routing.

Installation

```bash
npm install react-router-dom
```

---

## axios

Purpose

Communicate with the REST API.

Installation

```bash
npm install axios
```
### BREAKDOWN

| File                  | React Concept     | Why it's used here                                                    |
| --------------------- | ----------------- | --------------------------------------------------------------------- |
| `main.jsx`            | `BrowserRouter`   | Gives the entire application access to React Router.                  |
| `App.jsx`             | `Routes`, `Route` | Maps URLs to the correct page component.                              |
| `Layout.jsx`          | `Outlet`          | Displays the current page while keeping the shared layout persistent. |
| `Navbar.jsx`          | `NavLink`         | Lets users navigate between pages and highlights the active route.    |
| `BooksPage.jsx`       | `useState`        | Stores the list of books returned from the API.                       |
| `BooksPage.jsx`       | `useEffect`       | Retrieves books when the page first loads.                            |
| `BooksPage.jsx`       | `axios.get()`     | Requests all books from the API.                                      |
| `BookDetailsPage.jsx` | `useParams`       | Reads the book ID from the URL to request the correct book.           |
| `BookDetailsPage.jsx` | `axios.get()`     | Retrieves one specific book.                                          |
| `BookDetailsPage.jsx` | `axios.post()`    | Sends a reservation request.                                          |
| `RegisterPage.jsx`    | `useState`        | Stores form input values.                                             |
| `RegisterPage.jsx`    | `axios.post()`    | Sends registration data to the API.                                   |
| `RegisterPage.jsx`    | `useNavigate`     | Redirects the user after successful registration.                     |
| `LoginPage.jsx`       | `axios.post()`    | Authenticates the user.                                               |
| `LoginPage.jsx`       | `useNavigate`     | Redirects after successful login.                                     |
| `AuthContext.jsx`     | `createContext`   | Stores authentication globally.                                       |
| `AccountPage.jsx`     | `axios.get()`     | Retrieves the current user's profile and reservations.                |
| `AccountPage.jsx`     | `axios.delete()`  | Returns a reserved book.                                              |

| File                  | State               | Why?                                     |
| --------------------- | ------------------- | ---------------------------------------- |
| `BooksPage.jsx`       | `books`             | Stores every book returned from the API. |
| `BookDetailsPage.jsx` | `book`              | Stores the selected book.                |
| `LoginPage.jsx`       | `email`, `password` | Controlled form inputs.                  |
| `AccountPage.jsx`     | `user`              | Displays authenticated user information. |

| Endpoint            | Used By               | Purpose                              |
| ------------------- | --------------------- | ------------------------------------ |
| `GET /books`        | `BooksPage.jsx`       | Retrieve the catalog.                |
| `GET /books/:id`    | `BookDetailsPage.jsx` | Retrieve one book.                   |
| `POST /users/login` | `LoginPage.jsx`       | Authenticate the user.               |
| `GET /users/me`     | `AccountPage.jsx`     | Retrieve the current user's profile. |

| Component         | Responsibility                           |
| ----------------- | ---------------------------------------- |
| `Layout`          | Shared application layout.               |
| `Navbar`          | Navigation.                              |
| `BooksPage`       | Retrieve and display all books.          |
| `BookCard`        | Display one book.                        |
| `BookDetailsPage` | Display one book and allow reservations. |

main.jsx
│
├── Starts the application
│
App.jsx
│
├── Controls routing
│
Layout.jsx
│
├── Creates the shared page structure
│
Navbar.jsx
│
└── Provides navigation