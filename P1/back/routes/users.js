import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:idusuario", updateUser);

router.delete("/:idusuario", deleteUser);

export default router;