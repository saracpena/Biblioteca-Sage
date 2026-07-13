import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function BooksDetailsPage() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get(`${API_URL}/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, [id]);

  console.log(book);

  if (!book) {
    return <p>Loading book...</p>;
  }

  return (
    <section>
      <img src={book.coverimage} alt={book.title} />
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>{book.available ? "Available" : "Checked Out"}</p>
    </section>
  );
}