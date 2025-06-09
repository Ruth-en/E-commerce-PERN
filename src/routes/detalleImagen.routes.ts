import { Router } from "express";
import * as detalleImagenController from "../controllers/detalleImagen.controller";
import { authenticateToken } from "../middlewares/auth";

const detalleImagenRouter = Router();

// Ruta base: /detalle-imagen
detalleImagenRouter.post("/", authenticateToken, detalleImagenController.addImagenToDetalleProducto);
detalleImagenRouter.get("/", detalleImagenController.getAllDetalleImagenes);
detalleImagenRouter.get("/:detalleId", detalleImagenController.getDetalleImagenById);
detalleImagenRouter.delete("/:id", authenticateToken, detalleImagenController.deleteDetalleImagenById);

export default detalleImagenRouter;
