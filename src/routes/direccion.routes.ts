import { Router } from "express";
import {
    getDirecciones,
    getDireccion,
    createNuevaDireccion,
    updateDireccion,
    deleteDireccionById,
} from "../controllers/direccion.controller";

const direccionRouter = Router();

// GET /direcciones - Obtener todas las direcciones
direccionRouter.get("/", getDirecciones);

// GET /direcciones/:id - Obtener una dirección por ID
direccionRouter.get("/:id", getDireccion);

// POST /direcciones - Crear una nueva dirección
direccionRouter.post("/", createNuevaDireccion);

// PUT /direcciones/:id - Actualizar una dirección existente
direccionRouter.put("/:id", updateDireccion);

// DELETE /direcciones/:id - Eliminar una dirección
direccionRouter.delete("/:id", deleteDireccionById);

export default direccionRouter;
