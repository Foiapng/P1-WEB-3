import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./components/styles/global.css";
import "./components/styles/cadastro.css";
import Cadastro from "./components/cadastro.js";
import axios from "axios";
import Header from "./Header.js";

function CadastroPage() {
  return (
    <>
        <div className="CadastroPageContainer">
            <Cadastro className="Cadastro" />
        </div>

      <ToastContainer autoClose={300} position="bottom-left" />
    </>
  );
}

export default CadastroPage;