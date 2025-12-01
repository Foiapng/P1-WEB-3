import { useRef } from "react";
import axios from "axios";
import "./styles/cadastro.css";
import "./styles/global.css";
import { toast } from "react-toastify";

const Cadastro = ({  }) => {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = ref.current;

    // Verificar se todos os campos estão preenchidos
    if (
      !user.nome.value ||
      !user.email.value ||
      !user.senha.value ||
      !user.senhaconfirma.value ||
      !user.telefone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (user.senha.value !== user.senhaconfirma.value) {
      return toast.error("As senhas não coincidem!");
    }

    try {
      await axios.post("http://localhost:8800/usuarios", {
        nome: user.nome.value,
        email: user.email.value,
        senha: user.senha.value,
        telefone: user.telefone.value,
        data_nascimento: user.data_nascimento.value,
      });

      toast.success("Usuário adicionado com sucesso!");

      user.nome.value = "";
      user.email.value = "";
      user.senha.value = "";
      user.senhaconfirma.value = "";
      user.telefone.value = "";
      user.data_nascimento.value = "";

      window.location.href = "/login";

    } catch (err) {
      toast.error(err.response?.data || "Erro ao salvar usuário");
    }
  };

  return (
    <form className="CadastroContainer" ref={ref} onSubmit={handleSubmit}>
      <h1 className="TitleCadastro">Cadastro</h1>

      <section className="InputAreaCadastro">
        <label>Nome Completo</label>
        <input name="nome" />
      </section>

      <section className="InputAreaCadastro">
        <label>E-mail</label>
        <input name="email" type="email" />
      </section>

      <section className="InputAreaCadastro">
        <label>Telefone</label>
        <input name="telefone" />
      </section>

      <section className="InputAreaCadastro">
        <label>Data de Nascimento</label>
        <input name="data_nascimento" type="date" />
      </section>

      <section className="InputAreaCadastro">
        <label>Senha</label>
        <input name="senha" type="password" />
      </section>

      <section className="InputAreaCadastro">
        <label>Confirme a Senha</label>
        <input name="senhaconfirma" type="password" />
      </section>

      <button type="submit" className="ButtonCadastro">Criar Usuário</button>
    </form>
  );
};

export default Cadastro;
