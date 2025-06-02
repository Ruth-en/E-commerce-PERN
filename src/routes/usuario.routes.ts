import { Router } from "express";

import {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario
} from "../controllers/usuario.controller";
import { authenticateToken } from "../middlewares/auth";

const usuarioRouter = Router();
/**
 * @openapi
 * /usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
usuarioRouter.get("/", authenticateToken, getUsuarios);
usuarioRouter.get("/:id", authenticateToken, getUsuarioById);
usuarioRouter.post("/", authenticateToken, createUsuario);
usuarioRouter.put("/:id", authenticateToken, updateUsuario);
usuarioRouter.delete("/:id", authenticateToken, deleteUsuario);

export default usuarioRouter;
