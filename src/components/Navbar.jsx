import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  //const { token, logout } = useAuth(); //shares state
  const { token, user, logout } = useAuth();
  console.log(user);

    return (
    <nav>
      {/* <h2>Biblioteca Sage</h2> */}

      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">Books</NavLink>

       {token ? ( //if token exist show account and logout
        <>
          <NavLink to="/account">Account</NavLink>
          <button onClick={logout}>Logout</button>
        </>
      ) : ( //else show register and login options
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