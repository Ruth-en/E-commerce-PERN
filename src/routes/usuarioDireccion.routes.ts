import { Router } from "express";
import * as usuarioDireccionController from "../controllers/usuarioDireccion.controller";
import { authenticateToken } from "../middlewares/auth";

const usuarioDirecRouter = Router();

// GET /usuario-direcciones
usuarioDirecRouter.get("/", authenticateToken, usuarioDireccionController.getAllUsuarioDirecciones);

// GET /usuario-direcciones/:id
usuarioDirecRouter.get("/:id", authenticateToken, usuarioDireccionController.getUsuarioDireccionById);

// POST /usuario-direcciones
usuarioDirecRouter.post("/", authenticateToken, usuarioDireccionController.createUsuarioDireccion);

// DELETE /usuario-direcciones/:id
usuarioDirecRouter.delete("/:id", authenticateToken, usuarioDireccionController.deleteUsuarioDireccion);

export default usuarioDirecRouter;
