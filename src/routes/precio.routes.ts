import { Router } from "express";
import * as precioController from "../controllers/precio.controller";

const precioRouter = Router();

precioRouter.get("/", precioController.getPrecios);
precioRouter.get("/:id", precioController.getPrecio);
precioRouter.post("/", precioController.createPrecio);
precioRouter.delete("/:id", precioController.deletePrecio);

export default precioRouter;
