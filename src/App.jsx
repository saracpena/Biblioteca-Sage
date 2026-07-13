import { Routes, Route } from "react-router";
import BooksPage from "./pages/BooksPage";
import BooksDetailsPage from "./pages/BooksDetailsPage";

function App() {
  return (
    <div className="app-header">
      <h1 className="app-title">
        <img id="logo-image" src="books.png" />
        Biblioteca Sage
      </h1>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BooksDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

/*App.jsx is the application's routing hub. It connects each URL to its corresponding 
page and renders the shared Layout component. App does not manage application data or 
communicate with the API—its responsibility is simply deciding which page should be 
displayed.*/
