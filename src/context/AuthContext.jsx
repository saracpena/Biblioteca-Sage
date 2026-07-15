import { createContext, useContext, useState } from "react";
import axios from "axios";

const API_URL =
  "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  const [user, setUser] = useState(null);

  const getUser = async (currentToken) => {
    try {
      const response = await axios.get(`${API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = (newToken, newUser) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);

    if (newUser) {
      setUser(newUser);
    } else {
      getUser(newToken);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}