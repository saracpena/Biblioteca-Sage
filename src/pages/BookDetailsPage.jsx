import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const API_URL =
  "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function BookDetailsPage() {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const { token, getUser } = useAuth();

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

  const reserveBook = async () => {
    try {
      await axios.post(
        `${API_URL}/reservations`,
        {
          bookId: book.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      getUser(token);
    } catch (error) {
      console.log(error);
    }
  };

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

      {token && (
        <button
          onClick={reserveBook}
          disabled={!book.available}
        >
          {book.available ? "Reserve Book" : "Unavailable"}
        </button>
      )}
    </section>
  );
}

//TODO: 
/* 
✓ useParams()

✓ book state

✓ useAuth()

✓ Reserve button

✓ reserveBook()

✓ axios.post()

✓ Authorization header

✓ getUser(token) */