import { NavLink } from "react-router";

export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <img src={book.coverimage} alt={book.title} />

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
