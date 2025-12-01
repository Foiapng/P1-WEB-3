import { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({}); 
      localStorage.setItem("isLogged", "true");
    } else {
      localStorage.setItem("isLogged", "false");
    }
  }, []);

  async function login(email, senha) {
    try {
      const res = await api.post("/auth/login", { email, senha });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isLogged", "true");

      setUser({ email });
      return true;

    } catch (error) {
      localStorage.setItem("isLogged", "false");
      throw error;
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.setItem("isLogged", "false");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
