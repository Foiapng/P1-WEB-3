import React, { useRef, useEffect } from "react";
import axios from "axios";
import "./styles/cadastro.css"
import { toast } from "react-toastify";



const Cadastro = ({ getUsers, onEdit, setOnEdit }) => {



return (
    <form className="CadastroContainer">
        <h1 className="TitleCadastro">Cadastro</h1>

        {/* <section className="InputGroupCadastro"> */}
            <section className="InputAreaCadastro">
                <label>Nome Completo</label>
                <input name="nome"/>
            </section>

            <section className="InputAreaCadastro">
                <label>E-mail</label>
                <input name="email" type="email" />
            </section>
        {/* </section> */}

        {/* <section className="InputGroupCadastro"> */}
            <section className="InputAreaCadastro">
                <label>Telefone</label>
                <input name="telefone"/>
            </section>

            <section className="InputAreaCadastro">
                <label>Data de Nascimento</label>
                <input name="data_nascimento" type="date" />
            </section>
        {/* </section> */}

        {/* <section className="InputGroupCadastro"> */}
            <section className="InputAreaCadastro">
                <label>Senha</label>
                <input name="senha" type="password" />
            </section>
            <section className="InputAreaCadastro">
                <label>Confirme a Senha</label>
                <input name="senhaconfirma" type="password" />
            </section>
        {/* </section> */}
        <button type="submit" className="ButtonCadastro">Criar Usuario</button>
    </form>
  );
};



  export default Cadastro;