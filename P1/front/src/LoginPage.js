import GlobalStyle from "./styles/global.js";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./styles/login.css"
import styled from "styled-components";
import Login from "./components/login.js";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 20vw;
  margin-top: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

function LoginPage() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
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
        <Container className="LoginContainer">
            <Login className="Login" />
        </Container>

      <ToastContainer autoClose={300} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default LoginPage;