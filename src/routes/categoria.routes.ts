import { Router } from "express";
import { createCategoria, deleteCategoria, getAllCategorias, getCategoriaById, updateCategoriaById } from "../controllers/categoria.controller";

const categoriasRouter = Router();
// Obtener todas las imágenes
categoriasRouter.get("/", getAllCategorias);

// Obtener una imagen por ID
categoriasRouter.get("/:id", getCategoriaById);

// Crear una nueva imagen
categoriasRouter.post("/", createCategoria);

// Actualizar una imagen por ID
categoriasRouter.put("/:id", updateCategoriaById);

// Eliminar una imagen por ID
categoriasRouter.delete("/:id", deleteCategoria);

export default categoriasRouter;