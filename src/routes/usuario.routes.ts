import { Router } from "express";

import {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  desactivarUsuario
} from "../controllers/usuario.controller";
import { authenticateToken } from "../middlewares/auth";

const usuarioRouter = Router();

usuarioRouter.get("/", authenticateToken, getUsuarios);
usuarioRouter.get("/:id", authenticateToken, getUsuarioById);
usuarioRouter.post("/", authenticateToken, createUsuario);
usuarioRouter.put("/:id", authenticateToken, updateUsuario);
usuarioRouter.put("/:id/desactivar", authenticateToken, desactivarUsuario);

export default usuarioRouter;
