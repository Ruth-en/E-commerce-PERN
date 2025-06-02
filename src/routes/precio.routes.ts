import { Router } from "express";
import * as precioController from "../controllers/precio.controller";
import { authenticateToken } from "../middlewares/auth";

const precioRouter = Router();

precioRouter.get("/", authenticateToken, precioController.getPrecios);
precioRouter.get("/:id", authenticateToken, precioController.getPrecio);
precioRouter.post("/", authenticateToken, precioController.createPrecio);
precioRouter.delete("/:id", authenticateToken, precioController.deletePrecio);

export default precioRouter;
