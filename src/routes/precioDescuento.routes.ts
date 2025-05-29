import { Router } from "express";
import { addDescuentoToPrecio, removeDescuentoFromPrecio, getDescuentosByPrecio, getPreciosByDescuento } from "../controllers/precioDescuento.controller";

const precioDescRouter = Router();

precioDescRouter.post("/precio-descuento", addDescuentoToPrecio);
precioDescRouter.delete("/precio-descuento", removeDescuentoFromPrecio);
precioDescRouter.get("/precio/:precioId/descuentos", getDescuentosByPrecio);
precioDescRouter.get("/descuento/:descuentoId/precios", getPreciosByDescuento);

export default precioDescRouter;
