import { NavLink } from "react-router";

export default function Navbar() {
    return (
    <nav>
      <h2>Biblioteca Sage</h2>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
    );
}

/* Navbar allows users to navigate throughout Biblioteca Sage.

It is rendered by Layout.jsx, making it visible on every page of the application.

Navigation is handled using NavLink, allowing users to move between pages without refreshing the browser. 
Because NavLink knows which route is active, it can also be styled to indicate the current page.*/