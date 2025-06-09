import { Router } from "express";
import {
  getAllImagenes,
  getImagenById,
  createImagen,
  updateImagenById,
  deleteImagen,
} from "../controllers/imagen.controller";
import { authenticateToken } from "../middlewares/auth";

const imagenRouter = Router();

// Obtener todas las imágenes
imagenRouter.get("/", getAllImagenes);

// Obtener una imagen por ID
imagenRouter.get("/:id", getImagenById);

// Crear una nueva imagen
imagenRouter.post("/", authenticateToken, createImagen);

// Actualizar una imagen por ID
imagenRouter.put("/:id", authenticateToken, updateImagenById);

// Eliminar una imagen por ID
imagenRouter.delete("/:id", authenticateToken, deleteImagen);

export default imagenRouter;
