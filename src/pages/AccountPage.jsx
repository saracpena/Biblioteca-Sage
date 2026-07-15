import { useAuth } from "../context/AuthContext";

export default function AccountPage() {
  const { user } = useAuth();

  if (!user) {
    return <p>Please log in to view your account.</p>;
  }

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
            </article>
          ))}
        </div>
      )}
    </section>
  );
}