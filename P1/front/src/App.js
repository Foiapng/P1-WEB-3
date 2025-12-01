
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./components/styles/usuarios.css"
import "./components/styles/global.css"
import styled from "styled-components";
import Form from "./components/form.js";
import Grid from "./components/grid.js";
import axios from "axios";
import Header from "./Header.js";


function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("https://web-3-z2aw.onrender.com/usuarios");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error("Erro ao buscar usuários");
    }
  };

  useEffect(() => {
    getUsers();
  }, []); 

  return (
    <>
      <div className="UsuariosContainer">
          <div className="Usuarios">
            <Form className="UsuariosForm" onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
            <Grid className="UsuariosGrid" users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
          </div>
      </div>

      <ToastContainer autoClose={300} position="bottom-left" />
    </>
  );
}

export default App;
