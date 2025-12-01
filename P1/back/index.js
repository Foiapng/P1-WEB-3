import express from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/authRoutes.js"; // <-- ADICIONADO
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Rotas de LOGIN
app.use("/auth", authRoutes); // <-- ADICIONADO

// Rotas de CRUD de usuários
app.use("/usuarios", userRoutes);

app.listen(8800, () => {
  console.log("🔥 Servidor rodando na porta 8800");
});
