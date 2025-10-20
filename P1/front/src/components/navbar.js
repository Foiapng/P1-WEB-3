import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import "./styles/header.css"
import "./styles/global.css"
     
       
       
       
const NavBar = () => {     
    return(
        <header className='NavBar'>
                <ul className="NavList">
                    <li className="NavUsuários"><Link to= '/' className="NavBtn">Home</Link></li>
                    <li className="NavLogin"><Link to='/Login' className="NavBtn">Login</Link></li>
                </ul>
        </header>
    );
};

export default NavBar;

