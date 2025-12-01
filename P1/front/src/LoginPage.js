import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./components/styles/global.css";
import "./components/styles/login.css";
import Login from "./components/login.js";
import Header from "./Header.js";
import axios from "axios";


function LoginPage() {
  return (
    <>
        <div className="LoginPageContainer">
            <Login className="Login" />
        </div>

      <ToastContainer autoClose={300} position="bottom-left" />
    </>
  );
}

export default LoginPage;