import { Request, Response } from "express";
import * as talleService from "../services/talle.service";

// GET /talles
export const getAllTalles = async (req: Request, res: Response) => {
    try {
        const talles = await talleService.getAllTalles();
        res.json(talles);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener talles" });
    }
};

// GET /talles/:id
export const getTalleById = async (req: Request, res: Response) => {
    try {
        const id = BigInt(req.params.id);
        const talle = await talleService.getTalleById(id);

        if (!talle) {
            res.status(404).json({ error: "Talle no encontrado" });
            return
        }

        res.json(talle);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el talle" });
    }
};

// POST /talles
export const createTalle = async (req: Request, res: Response) => {
    try {
        const { numero } = req.body;

        if (!numero) {
            res.status(400).json({ error: "El campo 'numero' es requerido" });
            return
        }
        const talle = await talleService.createTalle(numero);
        res.status(201).json(talle);
    } catch (error) {
        res.status(400).json({ error: "Error al crear talle" });
    }
};

// PUT /talles/:id
export const updateTalleById = async (req: Request, res: Response) => {
    try {
        const id = BigInt(req.params.id);
        const talle = await talleService.updateTalleById(id, req.body);
        res.json(talle);
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar talle" });
    }
};

// DELETE /talles/:id
export const deleteTalle = async (req: Request, res: Response) => {
    try {
        const id = BigInt(req.params.id);
        await talleService.deleteTalleById(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: "Error al eliminar talle" });
    }
};
