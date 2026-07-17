import { useState } from "react";
import { NavLink } from "react-router";

export default function BookCard({ book }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showPlaceholder = !book.coverimage || imageFailed; //? Does this card currently have an image?

  return (
    <article className="book-card">
      <div className="book-cover">
        {showPlaceholder ? (
          <div className="book-placeholder">
            <div className="placeholder-icon">📖</div>
            <h3>Biblioteca Sage</h3>
            <p>Classic Collection</p>
          </div>
        ) : (
          <img
            src={book.coverimage}
            alt={book.title}
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <h2>{book.title}</h2>
      <p>{book.author}</p>

      <p className={book.available ? "status available" : "status unavailable"}>
        {book.available ? "Available" : "Checked Out"}
      </p>

      <NavLink to={`/books/${book.id}`}>View Details</NavLink>
    </article>
  );
}
//pass details from BooksPage
