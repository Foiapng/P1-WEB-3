import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c7352;
  color: #fff;
  height: 42px;

  &:hover {
    background-color: #183f2cff;
  }
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    const user = ref.current;
    if (onEdit) {
      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.senha.value = onEdit.senha;
      user.telefone.value = onEdit.telefone;
      user.data_nascimento.value = onEdit.data_nascimento;
    } else {
      user.nome.value = "";
      user.email.value = "";
      user.senha.value = "";
      user.telefone.value = "";
      user.data_nascimento.value = "";
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.senha.value ||
      !user.telefone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      if (onEdit) {
        await axios.put(`http://localhost:8800/${onEdit.idusuario}`, {
          nome: user.nome.value,
          email: user.email.value,
          senha: user.senha.value,
          telefone: user.telefone.value,
          data_nascimento: user.data_nascimento.value,
        });
        toast.success("Usuário atualizado com sucesso!");
      } else {
        await axios.post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          senha: user.senha.value,
          telefone: user.telefone.value,
          data_nascimento: user.data_nascimento.value,
        });
        toast.success("Usuário adicionado com sucesso!");
      }

      user.nome.value = "";
      user.email.value = "";
      user.senha.value = "";
      user.telefone.value = "";
      user.data_nascimento.value = "";

      setOnEdit(null);
      getUsers();
    } catch (err) {
      toast.error(err.response?.data || "Erro ao salvar usuário");
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Senha</Label>
        <Input name="senha" type="password" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>

      <Button type="submit">Salvar</Button>
    </FormContainer>
  );
};

export default Form;
