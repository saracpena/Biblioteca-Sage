import { useState } from "react";
import axios from "axios";

const API_URL =
  "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/users/register`, {
        firstName,
        lastName,
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Register</h1>

      <form onSubmit={register}>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <button type="submit">Create Account</button>
      </form>
    </section>
  );
}