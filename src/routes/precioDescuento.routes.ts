import { Router } from "express";
import { addDescuentoToPrecio, removeDescuentoFromPrecio, getDescuentosByPrecio, getPreciosByDescuento } from "../controllers/precioDescuento.controller";
import { authenticateToken } from "../middlewares/auth";

const precioDescRouter = Router();

precioDescRouter.post("/precio-descuento", authenticateToken, addDescuentoToPrecio);
precioDescRouter.delete("/precio-descuento", authenticateToken, removeDescuentoFromPrecio);
precioDescRouter.get("/precio/:precioId/descuentos", authenticateToken, getDescuentosByPrecio);
precioDescRouter.get("/descuento/:descuentoId/precios", authenticateToken, getPreciosByDescuento);

export default precioDescRouter;
