import { Router } from "express";
import { createDescuento, deleteDescuento, getAllDescuentos } from "../controllers/descuento.controller";
import { authenticateToken } from "../middlewares/auth";

const descuentoRouter = Router();

descuentoRouter.get("/", getAllDescuentos);
descuentoRouter.post("/", authenticateToken, createDescuento);
descuentoRouter.delete("/:id", authenticateToken, deleteDescuento);

export default descuentoRouter;