import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import "./styles/footer.css"
import "./styles/global.css"
     
       
       
       
const FooterInfo = () => {     
    return(
        <footer className='Footer'>
                <ul className="FooterInfo">
                    <li className="NavLogin"><Link to='*' className="NavBtn">Contato</Link></li>
                </ul>
        </footer>
    );
};

export default FooterInfo
;