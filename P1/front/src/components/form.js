import React, { useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./styles/usuarios.css";

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

useEffect(() => {
  const user = ref.current;
  if (onEdit) {
    user.nome.value = onEdit.nome;
    user.email.value = onEdit.email;
    user.senha.value = onEdit.senha;
    user.telefone.value = onEdit.telefone;

    // Converter a data para YYYY-MM-DD
    if (onEdit.data_nascimento) {
      const date = new Date(onEdit.data_nascimento);
      const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD
      user.data_nascimento.value = formattedDate;
    }
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
      if (onEdit && onEdit.idusuarios) {
        // PUT corrigido com /usuarios
        await axios.put(`http://localhost:8800/usuarios/${onEdit.idusuarios}`, {
          nome: user.nome.value,
          email: user.email.value,
          senha: user.senha.value,
          telefone: user.telefone.value,
          data_nascimento: user.data_nascimento.value,
        });
        toast.success("Usuário atualizado com sucesso!");
      } else {
        // POST corrigido com /usuarios
        await axios.post("http://localhost:8800/usuarios", {
          nome: user.nome.value,
          email: user.email.value,
          senha: user.senha.value,
          telefone: user.telefone.value,
          data_nascimento: user.data_nascimento.value,
        });
        toast.success("Usuário adicionado com sucesso!");
      }

      // Limpar formulário
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
    <form className="UsuariosFormContainer" ref={ref} onSubmit={handleSubmit}>
      <h1 className="UsuariosTitle">Usuários</h1>
      <section className="UsuariosFormInputs">
          <section className="UsuariosInputArea">
            <label>Nome</label>
            <input name="nome" />
          </section>

          <section className="UsuariosInputArea">
            <label>E-mail</label>
            <input name="email" type="email" autoComplete="email" />
          </section>

          <section className="UsuariosInputArea">
            <label>Senha</label>
            <input name="senha" type="password" />
          </section>

          <section className="UsuariosInputArea">
            <label>Telefone</label>
            <input name="telefone" />
          </section>
          
          <section className="UsuariosInputArea">
            <label>Nascimento</label>
            <input name="data_nascimento" type="date" />
          </section>
      </section>

      <button type="submit" className="UsuariosButton">
        Salvar
      </button>
    </form>
  );
};

export default Form;
