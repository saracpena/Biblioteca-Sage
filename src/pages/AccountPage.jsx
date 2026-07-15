import { useAuth } from "../context/AuthContext";
import axios from "axios";

const API_URL =
  "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function AccountPage() {
  const { user, token, getUser } = useAuth();

  if (!user) {
    return <p>Please log in to view your account.</p>;
  }

  const returnBook = async (reservationId) => {
  try {
    await axios.delete(
      `${API_URL}/reservations/${reservationId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    await getUser(token);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <section>
      <h1>My Account</h1>

      <h2>
        Welcome, {user.firstname} {user.lastname}
      </h2>

      <p>Email: {user.email}</p>

      <h2>My Reserved Books</h2>

      {user.reservations.length === 0 ? (
        <p>You have no reserved books.</p>
      ) : (
        <div>
          {user.reservations.map((reservation) => (
            <article key={reservation.id}>
              <h3>{reservation.title}</h3>
              <p>{reservation.author}</p>

              <button onClick={() => returnBook(reservation.id)}>Return Book</button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}