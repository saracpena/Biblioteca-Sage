import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
  </BrowserRouter>,
);

/* Once BrowserRouter is in place, React Router gives us access to things like:

<Routes>
<Route>
<Link>
<NavLink>
<Outlet>
useNavigate()
useParams()

Without BrowserRouter, none of those work. */
