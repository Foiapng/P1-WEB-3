import React from "react";
import axios from "axios";
import "./styles/home.css"
import "./styles/global.css"
import styled from "styled-components";
import { toast } from "react-toastify";


const Home = () => {


  return (
    <section className="HomeContainer">
          <h1 className="TitleHome">Disclaimer</h1>
          <text>Esse pequeno projeto foi feito pra aula de DW3,
            e foi feito por uma só pessoa sem ter tema pensado, 
            por isso acabou ficando bem simples.
          </text> 
    </section>
  );    
};



  export default Home;