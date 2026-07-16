import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { token, user, logout } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">Books</NavLink>

      {token ? (
        <>
          <NavLink to="/account">Account</NavLink>

          <div className="nav-user">
            {user && (
              <>
                <span className="welcome">
                  Welcome, {user.firstname}
                </span>

                <span className="divider">|</span>
              </>
            )}

            <button
              className="logout-button"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
}

/* Navbar allows users to navigate throughout Biblioteca Sage.

It is rendered by Layout.jsx, making it visible on every page of the application.

Navigation is handled using NavLink, allowing users to move between pages without refreshing the browser. 
Because NavLink knows which route is active, it can also be styled to indicate the current page.*/
