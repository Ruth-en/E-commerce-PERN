import { Router } from "express";
import { createDescuento, deleteDescuento, getAllDescuentos } from "../controllers/descuento.controller";

const descuentoRouter = Router();

descuentoRouter.get("/", getAllDescuentos);
descuentoRouter.post("/", createDescuento);
descuentoRouter.delete("/:id", deleteDescuento);

export default descuentoRouter;