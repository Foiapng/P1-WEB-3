import express from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/authRoutes.js"; 
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({
  origin: "*", 
  methods: "GET,POST,PUT,DELETE",
}));



app.use("/auth", authRoutes);


app.use("/usuarios", userRoutes);

app.listen(8800, () => {
  console.log("🔥 Servidor rodando na porta 8800");
});
