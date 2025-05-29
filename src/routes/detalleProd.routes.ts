import { Router } from "express";
import * as detalleController from "../controllers/detalleProducto.controller";

const detalleProdRouter = Router();

// Ruta base: /detalles-productos

// Obtener todos los detalles de productos
detalleProdRouter.get("/", detalleController.getAllDetalleProductos);

// Obtener un detalle de producto por ID
detalleProdRouter.get("/:id", detalleController.getDetallesProductoById);

// Crear un nuevo detalle de producto
detalleProdRouter.post("/", detalleController.createDetallesProducto);

// Actualizar un detalle de producto por ID
detalleProdRouter.put("/:id", detalleController.updateDetallesProductoById);

// Eliminar un detalle de producto por ID
detalleProdRouter.delete("/:id", detalleController.deleteDetallesProductoById);

export default detalleProdRouter;
