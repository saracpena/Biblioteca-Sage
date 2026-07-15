import { Routes, Route } from "react-router";
import BooksPage from "./pages/BooksPage";
import BooksDetailsPage from "./pages/BooksDetailsPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
<>
  <header className="app-header">
    <img
      id="logo-image"
      src="/books.png"
      alt="Biblioteca Sage logo"
    />

    <h1 className="app-title">Biblioteca Sage</h1>
  </header>

  <main>
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/books/:id" element={<BooksDetailsPage />} />
      <Route path="/register" element={<RegisterPage />} />
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
