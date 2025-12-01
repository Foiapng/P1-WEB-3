import { useState } from "react";
import api from "../services/api";   // <= você precisa ter esse arquivo
import "./styles/login.css";
import "./styles/global.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { email, senha });

      // Salva token
      localStorage.setItem("token", res.data.token);

      // Marca como logado
      localStorage.setItem("isLogged", "true");

      alert("Login realizado com sucesso!");

      // redirecionar (se quiser)
      window.location.href = "/"; // Página inicial ou dashboard

    } catch (error) {
      localStorage.setItem("isLogged", "false");
      console.log(error);
      console.log(error.response?.data);
      alert("E-mail ou senha incorretos!");
    }
  };

  return (
    <form className="LoginContainer" onSubmit={handleLogin}>
      <section className="InputAreaLogin">
        <h1 className="TitleLogin">Login</h1>
      </section>  
      <section className="InputAreaLogin">
        <label>E-mail</label>
        <input 
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </section>
      <section className="InputAreaLogin">
        <label>Senha</label>
        <input 
          name="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </section>
      <section className="InputAreaLogin">
        <button type="submit" className="ButtonLogin">Entrar</button>
      </section>
    </form>
  );
};

export default Login;
