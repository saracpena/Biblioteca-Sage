/* Dependencies */
import { Routes, Route } from "react-router";

/* Component Imports */
import Navbar from "./components/Navbar";
import BooksPage from "./pages/BooksPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";

function App() {
  return (
    <>
    <header className="app-header">
  <div className="brand">
    <img id="logo-image" src="/books.png" alt="Biblioteca Sage logo" />
    <div>
      <h1 className="app-title">Biblioteca Sage</h1>
      <p className="tagline">Explore • Borrow • Read</p>
    </div>
  </div>
</header>
      <Navbar/>
      <main>
        <Routes>        
          <Route path="/" element={<BooksPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

/*App.jsx is the application's routing hub. It connects each URL to its corresponding 
page and renders the shared Layout component. App does not manage application data or 
communicate with the API—its responsibility is simply deciding which page should be 
displayed.*/
