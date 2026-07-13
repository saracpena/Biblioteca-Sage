import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
   </div>
  );
}

/*Layout has exactly three jobs.

✔ Render the application's shared layout.

✔ Display the Navbar.

✔ Provide an Outlet for page content.

Layout.jsx provides the shared structure for the application. 
Since every page should display the same navigation, the Navbar is rendered 
here instead of inside each individual page. <Outlet /> acts as a placeholder 
where React Router renders the page that matches the current URL, 
allowing the navigation to remain visible while only the main content changes.*/