import React from "react";
import axios from "axios";
import "src/styles/login.css"
import styled from "styled-components";
import { toast } from "react-toastify";



const LoginContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
  background-color: #000000ff;
  padding: 20px;
  border-radius: 5px;
  height: 100%;
  width: 40%;
`;

const InputArea = styled.div`
  display: flexbox;
  flex-direction: row;
`;


const Input = styled.input`
  width: 120px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
`;

const Label = styled.label`
    color: white;
`;

const Title = styled.title`
    color: white;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c7352;
  color: #fff;
  height: 42px;

  &:hover {
    background-color: #1f5c3f;
  }
`;

const Login = () => {


  return (
    <LoginContainer className="LoginConteiner">
        <Title className="TitleLogin">Login</Title>
        <InputArea className="InputAreaLogin">
            <Label>E-mail</Label>
            <Input name="email" type="email" />
        </InputArea>
        <InputArea className="InputAreaLogin">
            <Label>Senha</Label>
            <Input name="senha" type="password" />
        </InputArea>

        <Button type="submit" className="ButtonLogin">Entrar</Button>
    </LoginContainer>
  );
};



  export default Login;