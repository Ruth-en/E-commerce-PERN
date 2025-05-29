import { Router } from "express";
import * as productoController from "../controllers/producto.controller";

const productoRouter = Router();

productoRouter.get("/", productoController.getAllProductos);
productoRouter.get("/:id", productoController.getProductoById);
productoRouter.post("/", productoController.createProducto);
productoRouter.put("/:id", productoController.updateProductoById);
productoRouter.delete("/:id", productoController.deleteProductoById);

export default productoRouter;
