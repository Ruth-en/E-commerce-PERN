import { Router } from "express";
import * as productoController from "../controllers/producto.controller";
import { authenticateToken } from "../middlewares/auth";

const productoRouter = Router();

productoRouter.get("/", productoController.getAllProductos);
productoRouter.get("/:id", productoController.getProductoById);
productoRouter.post("/", authenticateToken, productoController.createProducto);
productoRouter.put("/:id", authenticateToken, productoController.updateProductoById);
productoRouter.delete("/:id", authenticateToken, productoController.deleteProductoById);

export default productoRouter;
