import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


export const addUser = async (req, res) => {
  // Sempre hasheia a senha
  const hash = await bcrypt.hash(req.body.senha, 10);

  const q =
    "INSERT INTO usuarios(`nome`, `email`, `senha`, `telefone`, `data_nascimento`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    hash,
    req.body.telefone,
    req.body.data_nascimento,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario criado com sucesso.");
  });
};


export const updateUser = async (req, res) => {
  const hash = await bcrypt.hash(req.body.senha, 10);

  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `senha` = ?, `telefone` = ?, `data_nascimento` = ? WHERE `idusuarios` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    hash, // senha hash
    req.body.telefone,
    req.body.data_nascimento,
  ];

  db.query(q, [...values, req.params.idusuarios], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario atualizado com sucesso.");
  });
};


export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `idusuarios` = ?";

  db.query(q, [req.params.idusuarios], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario deletado com sucesso.");
  });
};
