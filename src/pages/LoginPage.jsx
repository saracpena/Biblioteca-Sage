import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const API_URL =
  "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/users/login`, {
        email,
        password,
      });

      login(response.data.token, null);

      navigate("/books"); //? WHY? For better user experience. Instead of sitting on "login" then route user to start using app!

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
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

        <button type="submit">Login</button>
      </form>
    </section>
  );
}