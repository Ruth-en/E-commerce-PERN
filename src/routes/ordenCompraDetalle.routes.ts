import { Router } from "express";
import * as ordenDetalleController from "../controllers/ordenCompraDetalle.controller";
import { authenticateToken, authorizeRoles } from "../middlewares/auth";

const ordenDetalleRouter = Router();

ordenDetalleRouter.post("/", authenticateToken, ordenDetalleController.addDetalleToOrden);
ordenDetalleRouter.get("/", authenticateToken, ordenDetalleController.getAllDetallesOrden);
ordenDetalleRouter.get("/:ordenCompraId", authenticateToken, ordenDetalleController.getDetallesByOrden);
ordenDetalleRouter.delete("/:ordenCompraId/:detalleId", authenticateToken, ordenDetalleController.removeDetalleFromOrden);

export default ordenDetalleRouter;
