import { Router } from "express";
import * as usuarioDireccionController from "../controllers/usuarioDireccion.controller";

const usuarioDirecRouter = Router();

// GET /usuario-direcciones
usuarioDirecRouter.get("/", usuarioDireccionController.getAllUsuarioDirecciones);

// GET /usuario-direcciones/:id
usuarioDirecRouter.get("/:id", usuarioDireccionController.getUsuarioDireccionById);

// POST /usuario-direcciones
usuarioDirecRouter.post("/", usuarioDireccionController.createUsuarioDireccion);

// DELETE /usuario-direcciones/:id
usuarioDirecRouter.delete("/:id", usuarioDireccionController.deleteUsuarioDireccion);

export default usuarioDirecRouter;
