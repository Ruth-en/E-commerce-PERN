import { Request, Response } from "express";
import * as usuarioDireccionService from "../services/usuarioDireccion.service";

// GET /usuario-direcciones -> Obtener todas las relaciones
export const getAllUsuarioDirecciones = async (_req: Request, res: Response) => {
    try {
        const relaciones = await usuarioDireccionService.getAllUsuarioDirecciones();
        res.json(relaciones);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener las relaciones usuario-dirección" });
    }
};

// GET /usuario-direcciones/:id -> Obtener una relación por ID
export const getUsuarioDireccionById = async (req: Request, res: Response) => {
    try {
        const id = BigInt(req.params.id);
        const relacion = await usuarioDireccionService.getUsuarioDireccionById(id);
        if (!relacion) {
            res.status(404).json({ error: "Relación no encontrada" });
            return
        }
        res.json(relacion);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener la relación usuario-dirección" });
    }
};

// POST /usuario-direcciones -> Crear una relación
export const createUsuarioDireccion = async (req: Request, res: Response) => {
    const { usuarioId, direccionId } = req.body;

    if (!usuarioId || !direccionId) {
        res.status(400).json({ error: "usuarioId y direccionId son requeridos" });
        return
    }

    try {
        const nuevaRelacion = await usuarioDireccionService.createUsuarioDireccion(
            BigInt(usuarioId),
            BigInt(direccionId)
        );
        res.status(201).json(nuevaRelacion);
    } catch (error: any) {
        res.status(400).json({ error: error.message || "Error al crear la relación usuario-dirección" });
    }
};

// DELETE /usuario-direcciones/:id -> Eliminar una relación por ID
export const deleteUsuarioDireccion = async (req: Request, res: Response) => {
    try {
        const id = BigInt(req.params.id);
        await usuarioDireccionService.deleteUsuarioDireccion(id);
        res.json({ mensaje: "Relación eliminada correctamente" });
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al eliminar la relación usuario-dirección" });
    }
};
