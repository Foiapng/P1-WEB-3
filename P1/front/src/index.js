import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoginPage from './LoginPage.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App className="App" />
    <LoginPage className="LoginPage" />
  </React.StrictMode>
);
