import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import axios from "axios";

const API_URL =
  "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function AccountPage() {
  const { user, token, getUser } = useAuth();
  const [message, setMessage] = useState("");

  if (!user) {
    return <p>Please log in to view your account.</p>;
  }

  const reservations = user.reservations || []; //if there are currently no reservations, default or use the empty array on the right.

  const returnBook = async (reservation) => {
    try {
      await axios.delete(
        `${API_URL}/reservations/${reservation.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await getUser(token);

      setMessage(
        `${reservation.title} has been returned to the library.`
      );

      setTimeout(() => {
        setMessage("");
      }, 4000);
    } catch (error) {
      console.log(error.response?.data || error);
    }
  };

  return (
    <section className="account-panel">
      <h2>My Account</h2>

      <h3 className="account-greeting">
        Welcome, {user.firstname} {user.lastname}
      </h3>

      <p>Email: {user.email}</p>

      <h3>My Reserved Books</h3>

      {reservations.length === 0 ? (
        <p>You have no reserved books.</p>
      ) : (
        <div>
          {reservations.map((reservation) => (
            <article
              className="reservation-card"
              key={reservation.id}
            >
              <h3>{reservation.title}</h3>
              <p>{reservation.author}</p>

              <button
                className="button-primary"
                onClick={() => returnBook(reservation)}
              >
                Return Book
              </button>
            </article>
          ))}
        </div>
      )}

      {message && <div className="snackbar">{message}</div>}
    </section>
  );
}