import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./styles/header.css";
import "./styles/global.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [logged, setLogged] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged") === "true";
    setLogged(isLogged);

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLogout() {
    localStorage.setItem("isLogged", "false");
    localStorage.removeItem("token");
    setLogged(false);
    setOpen(false); // <--- fecha dropdown
    window.location.href = "/";
  }

  // 🔥 Fecha dropdown ao clicar em qualquer link/opção
  function closeDropdown() {
    setOpen(false);
  }

  return (
    <header className="NavBar">
      <ul className="NavList">
        <li className="NavHome">
          <Link to="/" className="NavBtn" onClick={closeDropdown}>Home</Link>
        </li>

        {logged && (
          <li className="NavUsuários">
            <Link to="/Crud" className="NavBtn" onClick={closeDropdown}>Crud</Link>
          </li>
        )}
      </ul>

      <section className="NavConta" ref={dropdownRef}>
        <button 
          className="NavContaBtn" 
          onClick={() => setOpen(!open)}
        >
          <span className="UserText">Conta</span>
        </button>

        {open && (
          <section id="dropdownConta" className="NavContaDropdown show">

            {!logged && (
              <section className="NavLog">
                <section className="NavLogin">
                  <Link to="/Login" className="NavBtnLogin" onClick={closeDropdown}>Entrar</Link>
                </section>

                <section className="NavCadastro">
                  <Link to="/Cadastro" className="NavBtnCadastro" onClick={closeDropdown}>Cadastre-se</Link>
                </section>
              </section>
            )}

            {logged && (
              <section className="NavLogged">
                <button className="NavLogoff" onClick={handleLogout}>Sair</button>
              </section>
            )}

          </section>
        )}
      </section>
    </header>
  );
};

export default NavBar;
