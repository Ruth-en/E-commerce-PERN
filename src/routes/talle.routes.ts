import { Router } from "express";
import * as talleController from "../controllers/talle.controller";
import { authenticateToken } from "../middlewares/auth";

const talleRouter = Router();

talleRouter.get("/", authenticateToken, talleController.getAllTalles);
talleRouter.get("/:id", authenticateToken, talleController.getTalleById);
talleRouter.post("/", authenticateToken, talleController.createTalle);
talleRouter.put("/:id", authenticateToken, talleController.updateTalleById);
talleRouter.delete("/:id", authenticateToken, talleController.deleteTalle);

export default talleRouter;
