import { useRef } from "react";
import axios from "axios";
import "./styles/cadastro.css";
import "./styles/global.css";
import { toast } from "react-toastify";

const Cadastro = () => {
  const ref = useRef();

  const formatPhone = (value) => {
    value = value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length <= 10) {
      return value
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }

    return value
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = ref.current;

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
      await axios.post("https://web-3-z2aw.onrender.com/usuarios", {
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
        <input
          name="telefone"
          maxLength={15}
          onChange={(e) => (e.target.value = formatPhone(e.target.value))}
        />
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
