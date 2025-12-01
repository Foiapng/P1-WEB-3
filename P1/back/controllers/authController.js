import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { db } from "../db.js";

const SECRET = process.env.JWT_SECRET || "supersecreto";

export async function login(req, res) {
  const { email, senha } = req.body;

  const q = "SELECT * FROM usuarios WHERE email = ? LIMIT 1";

  db.query(q, [email], async (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    const user = data[0];

    //hash bcrypt
    const senhaValida = await bcrypt.compare(senha, user.senha);

    if (!senhaValida) {
      return res.status(401).json({ error: "Senha inválida" });
    }

    const token = jwt.sign(
      { id: user.idusuarios, email: user.email },
      SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  });
}
