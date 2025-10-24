import React from "react";
import axios from "axios";
import "./styles/login.css"
import styled from "styled-components";
import { toast } from "react-toastify";



const Login = () => {


  return (
    <form className="LoginContainer">
        <section className="InputAreaLogin">
          <h1 className="TitleLogin">Login</h1>
        </section>  
        <section className="InputAreaLogin">
            <label>E-mail</label>
            <input name="email" type="email" />
        </section>
        <section className="InputAreaLogin">
            <label>Senha</label>
            <input name="senha" type="password" />
        </section>
        <section className="InputAreaLogin">
        <button type="submit" className="ButtonLogin">Entrar</button>
        </section>
    </form>
  );
};



  export default Login;