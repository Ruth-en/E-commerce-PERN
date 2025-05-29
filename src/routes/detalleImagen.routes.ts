import { Router } from "express";
import * as detalleImagenController from "../controllers/detalleImagen.controller";

const detalleImagenRouter = Router();

// Ruta base: /detalle-imagen
detalleImagenRouter.post("/", detalleImagenController.addImagenToDetalleProducto);
detalleImagenRouter.get("/", detalleImagenController.getAllDetalleImagenes);
detalleImagenRouter.get("/:detalleId", detalleImagenController.getDetalleImagenById);
detalleImagenRouter.delete("/:id", detalleImagenController.deleteDetalleImagenById);

export default detalleImagenRouter;
