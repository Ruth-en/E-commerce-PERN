import { Request, Response } from "express";
import {
    getAllDirecciones,
    getAllDireccionesById,
    createDireccion,
    updateDireccionById,
    deleteDireccion,
} from "../services/direccion.service";

//Get 
export const getDirecciones = async (_req: Request, res: Response) => {
    try {
        const direcciones = await getAllDirecciones();
        res.status(200).json(direcciones);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las direcciones" });
    }
};

//Get by Id
export const getDireccion = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const direccion = await getAllDireccionesById(id);

        if (!direccion) {
            res.status(404).json({ error: "Dirección no encontrada" });
            return
        }

        res.status(200).json(direccion);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la dirección" });
    }
};

//Post
export const createNuevaDireccion = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const direccion = await createDireccion(data);
        res.status(201).json(direccion);
    } catch (error) {
        res.status(500).json({ error: "Error al crear la dirección" });
    }
};

//Post
export const updateDireccion = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const data = req.body;

        const direccion = await updateDireccionById(id, data);
        res.status(201).json(direccion);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la dirección" });
    }
};

//Delete
export const deleteDireccionById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        await deleteDireccion(id);
        res.status(200).json({ message: "Dirección eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la dirección" });
    }
};
