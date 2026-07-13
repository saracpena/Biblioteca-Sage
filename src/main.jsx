import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
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
