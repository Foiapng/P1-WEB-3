import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.js';
import ColorModeBtn from './ColorModeBtn.js';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Routers.js';
import "./components/styles/global.css"
import { AuthProvider } from './context/authContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Header/>
        <MainRoutes/>
        <ColorModeBtn/>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
