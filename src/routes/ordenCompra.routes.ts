import { Router } from "express";
import * as ordenCompraController from "../controllers/ordenCompra.controller";

const ordenCompraRouter = Router();

// GET /ordenes
ordenCompraRouter.get("/", ordenCompraController.getAllOrdenes);

// GET /ordenes/:id
ordenCompraRouter.get("/:id", ordenCompraController.getOrdenById);

// POST /ordenes
ordenCompraRouter.post("/", ordenCompraController.createOrdenCompra);

export default ordenCompraRouter;
