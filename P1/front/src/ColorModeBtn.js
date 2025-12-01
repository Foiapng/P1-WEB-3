import "react-toastify/dist/ReactToastify.css";
import "./components/styles/colorMode.css"
import "./components/styles/global.css"
import ColorMode from "./components/colorMode.js";

function ColorModeBtn () {
    return(
        <ColorMode className="ColorMode"/>
    );
};

export default ColorModeBtn;