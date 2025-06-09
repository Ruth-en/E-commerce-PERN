import { Router } from "express";
import * as ordenCompraController from "../controllers/ordenCompra.controller";
import { authenticateToken } from "../middlewares/auth";

const ordenCompraRouter = Router();

// GET /ordenes
ordenCompraRouter.get("/", authenticateToken, ordenCompraController.getAllOrdenes);

// GET /ordenes/:id
ordenCompraRouter.get("/:id", authenticateToken, ordenCompraController.getOrdenById);

// POST /ordenes
ordenCompraRouter.post("/", authenticateToken, ordenCompraController.createOrdenCompra);

// DELETE/ordenes/:id
ordenCompraRouter.delete("/:id", authenticateToken, ordenCompraController.deleteOrdenCompra);
export default ordenCompraRouter;
