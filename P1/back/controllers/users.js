import { db } from "../db.js";

export const  getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q =
        "INSERT INTO usuarios(`nome`, `email`, `senha`, `telefone`, `data_nascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.telefone,
        req.body.data_nascimento,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuario criado com sucesso.")
    });
};



export const updateUser = (req, res) => {
    const q =
        "UPDATE usuarios SET `nome` = ?, `email` = ?, `senha` = ?, `telefone` = ?, `data_nascimento` = ? WHERE `idusuario` = ?";


    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.telefone,
        req.body.data_nascimento,
    ];    

    db.query(q, [...values, req.params.idusuario], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuario atualizado com sucesso.")
    });

};


export const deleteUser = (req, res) => {
    const q =
        "DELETE usuarios WHERE `idusuario` = ?";

    db.query(q, [req.params.idusuario], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuario deletado com sucesso.")
    });

};