import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/users.js";


const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.put("/:idusuarios", updateUser);
router.delete("/:idusuarios", deleteUser);

export default router;
