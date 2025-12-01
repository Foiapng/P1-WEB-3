import { useState, useEffect, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./styles/colorMode.css";
import "./styles/global.css";

const ColorMode = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Carrega o tema salvo ao abrir o site
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
    }
  }, []);


      const applyTheme = (theme) => {
        const html = document.documentElement;
        const themes = ["Dark", "Cyan", "Green", "Purple"];

        html.classList.add("TransicaoTema");

        themes.forEach((t) => html.classList.remove(t));

        html.classList.add(theme);

        // Salvar no localStorage
        localStorage.setItem("theme", theme);

        setTimeout(() => {
          html.classList.remove("TransicaoTema");
        }, 300);
      };

      // Fecha o dropdown quando clica fora
      useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
          }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);

        function closeDropdown() {
        setOpen(false);
      }

      return (
        <section className="Color" ref={dropdownRef}>
          <button 
            className="ColorBtn" 
            onClick={() => setOpen(!open)}
          >
            <img className="ColorIcon" src="/palette.svg"/>
          </button>

          {open && (
      <section id="dropdownColor" className="ColorDropdown show">

        <button 
          className="ColorTemaBtn" 
          onClick={() => { applyTheme("Dark"); closeDropdown(); }}
        >
          Tema Escuro
        </button>

        <button 
          className="ColorTemaBtn" 
          onClick={() => { applyTheme("Cyan"); closeDropdown(); }}
        >
          Tema Ciano
        </button>

        <button 
          className="ColorTemaBtn" 
          onClick={() => { applyTheme("Green"); closeDropdown(); }}
        >
          Tema Verde
        </button>

        <button 
          className="ColorTemaBtn" 
          onClick={() => { applyTheme("Purple"); closeDropdown(); }}
        >
          Tema Roxo
        </button>
      </section>
    )}

    </section>
  );
};

export default ColorMode;
