import { NavLink } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <article>
      <img src={book.coverimage} alt={book.title} />

      <h2>{book.title}</h2>

      <p>{book.author}</p>

      <p>{book.available ? "Available" : "Checked Out"}</p>

      <NavLink to={`/books/${book.id}`}>
        View Details
      </NavLink>
    </article>
  );
}
//pass details from BooksPage
