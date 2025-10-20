import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Header.js';
import Footer from './Footer.js';
import LoginPage from './LoginPage.js';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Routers.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header className="Header" />
      <MainRoutes/>
      <Footer className="Footer"/>
    </BrowserRouter>
  </React.StrictMode>
);
