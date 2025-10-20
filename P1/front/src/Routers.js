import { Routes, Route } from "react-router-dom"; 
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import App from "./App";



function MainRoutes(){


    return(

        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/Login" element={<LoginPage />}/>
        </Routes>
    )
}

export default MainRoutes;