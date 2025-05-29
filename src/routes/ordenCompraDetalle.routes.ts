import { Router } from "express";
import * as ordenDetalleController from "../controllers/ordenCompraDetalle.controller";

const ordenDetalleRouter = Router();

ordenDetalleRouter.post("/", ordenDetalleController.addDetalleToOrden);
ordenDetalleRouter.get("/:ordenCompraId", ordenDetalleController.getDetallesByOrden);
ordenDetalleRouter.delete("/:ordenCompraId/:detalleId", ordenDetalleController.removeDetalleFromOrden);

export default ordenDetalleRouter;
