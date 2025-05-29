import { Router } from "express";
import * as talleController from "../controllers/talle.controller";

const talleRouter = Router();

talleRouter.get("/", talleController.getAllTalles);
talleRouter.get("/:id", talleController.getTalleById);
talleRouter.post("/", talleController.createTalle);
talleRouter.put("/:id", talleController.updateTalleById);
talleRouter.delete("/:id", talleController.deleteTalle);

export default talleRouter;
