import { Routes, Route } from "react-router-dom"; 
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import App from "./App";
import CadastroPage from "./CadastroPage"
import HomePage from "./HomePage";
import "./components/styles/global.css"


function MainRoutes(){


    return(

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Crud" element={<App/>}/>
            <Route path="/Login" element={<LoginPage />}/>
            <Route path="/Cadastro" element={<CadastroPage />}/>
        </Routes>
    )
}

export default MainRoutes;