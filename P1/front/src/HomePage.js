import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./components/styles/global.css";
import "./components/styles/home.css";
import Home from "./components/home.js";
import Header from "./Header.js";



function HomePage() {
  return (
    <>
        <div className="HomePageContainer">
            <Home className="Home" />
        </div>

      <ToastContainer autoClose={300} position="bottom-left" />
    </>
  );
}

export default HomePage;