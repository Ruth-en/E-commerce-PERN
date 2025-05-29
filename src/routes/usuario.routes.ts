import { Router } from "express";
import {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
deleteUsuario
} from "../controllers/usuario.controller";

const usuarioRouter = Router();

usuarioRouter.get("/", getUsuarios);
usuarioRouter.get("/:id", getUsuarioById);
usuarioRouter.post("/", createUsuario);
usuarioRouter.put("/:id", updateUsuario);
usuarioRouter.delete("/:id", deleteUsuario);

export default usuarioRouter;
