import { Router } from "express";
import { createCategoria, deleteCategoria, getAllCategorias, getCategoriaById, updateCategoriaById } from "../controllers/categoria.controller";
import { authenticateToken, authorizeRoles } from "../middlewares/auth";

const categoriasRouter = Router();
// Obtener todas las imágenes
categoriasRouter.get("/", getAllCategorias);

// Obtener una imagen por ID
categoriasRouter.get("/:id", getCategoriaById);

// Crear una nueva imagen
categoriasRouter.post("/", authenticateToken, createCategoria);

// Actualizar una imagen por ID
categoriasRouter.put("/:id", authenticateToken, updateCategoriaById);

// Eliminar una imagen por ID
categoriasRouter.delete("/:id", authenticateToken, deleteCategoria);

export default categoriasRouter;