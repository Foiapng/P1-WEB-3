import jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET || "supersecreto";

export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(403).json({ error: "Token não fornecido" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Token inválido" });

    req.user = decoded;
    next();
  });
}
