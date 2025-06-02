import { Router } from "express";
import * as detalleController from "../controllers/detalleProducto.controller";
import { authenticateToken } from "../middlewares/auth";

const detalleProdRouter = Router();

// Ruta base: /detalles-productos

// Obtener todos los detalles de productos
detalleProdRouter.get("/", authenticateToken, detalleController.getAllDetalleProductos);

// Obtener un detalle de producto por ID
detalleProdRouter.get("/:id", authenticateToken, detalleController.getDetallesProductoById);

// Crear un nuevo detalle de producto
detalleProdRouter.post("/", authenticateToken, detalleController.createDetallesProducto);

// Actualizar un detalle de producto por ID
detalleProdRouter.put("/:id", authenticateToken, detalleController.updateDetallesProductoById);

// Eliminar un detalle de producto por ID
detalleProdRouter.delete("/:id", authenticateToken, detalleController.deleteDetallesProductoById);

export default detalleProdRouter;
