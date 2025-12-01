import React from "react";
import axios from "axios";
import "./styles/home.css"
import "./styles/global.css"
import styled from "styled-components";
import { toast } from "react-toastify";


const Home = () => {


  return (
    <section className="HomeContainer">
          <h1 className="TitleHome">Aviso</h1>
          <text>Esse pequeno projeto foi feito pra aula de DW3,
            já que foi feito por uma só pessoa sem tema pensado, 
            acabou ficando bem simples.
          </text> 
    </section>
  );    
};



  export default Home;