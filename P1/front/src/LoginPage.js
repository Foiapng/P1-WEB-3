import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./components/styles/global.css";
import "./components/styles/login.css";
import Login from "./components/login.js";



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