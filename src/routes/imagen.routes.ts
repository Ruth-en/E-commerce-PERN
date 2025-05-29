import { Router } from "express";
import {
  getAllImagenes,
  getImagenById,
  createImagen,
  updateImagenById,
  deleteImagen,
} from "../controllers/imagen.controller";

const imagenRouter = Router();

// Obtener todas las imágenes
imagenRouter.get("/", getAllImagenes);

// Obtener una imagen por ID
imagenRouter.get("/:id", getImagenById);

// Crear una nueva imagen
imagenRouter.post("/", createImagen);

// Actualizar una imagen por ID
imagenRouter.put("/:id", updateImagenById);

// Eliminar una imagen por ID
imagenRouter.delete("/:id", deleteImagen);

export default imagenRouter;
