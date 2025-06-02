import { Router } from "express";
import {
    getDirecciones,
    getDireccion,
    createNuevaDireccion,
    updateDireccion,
    deleteDireccionById,
} from "../controllers/direccion.controller";
import { authenticateToken } from "../middlewares/auth";

const direccionRouter = Router();

// GET /direcciones - Obtener todas las direcciones
direccionRouter.get("/", authenticateToken, getDirecciones);

// GET /direcciones/:id - Obtener una dirección por ID
direccionRouter.get("/:id", authenticateToken, getDireccion);

// POST /direcciones - Crear una nueva dirección
direccionRouter.post("/", authenticateToken, createNuevaDireccion);

// PUT /direcciones/:id - Actualizar una dirección existente
direccionRouter.put("/:id", authenticateToken, updateDireccion);

// DELETE /direcciones/:id - Eliminar una dirección
direccionRouter.delete("/:id", authenticateToken, deleteDireccionById);

export default direccionRouter;
