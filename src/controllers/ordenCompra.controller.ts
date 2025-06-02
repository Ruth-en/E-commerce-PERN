import { Request, Response } from "express";
import * as ordenService from "../services/ordenCompra.service";

// GET /ordenes
export const getAllOrdenes = async (_req: Request, res: Response) => {
    try {
        const ordenes = await ordenService.getAllOrdenes();
        res.json(ordenes);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener las órdenes" });
    }
};

// GET /ordenes/:id
export const getOrdenById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const orden = await ordenService.getOrdenById(id);
        if (!orden) {
            res.status(404).json({ error: "Orden no encontrada" });
            return
        }
        res.json(orden);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener la orden" });
    }
};

// POST /ordenes
export const createOrdenCompra = async (req: Request, res: Response) => {
    const { fechaCompra, total, usuarioDireccionId } = req.body;

    if (!fechaCompra || typeof total !== "number" || !usuarioDireccionId) {
        res.status(400).json({
            error: "fechaCompra, total y usuarioDireccionId son requeridos",
        });
        return
    }

    try {
        const nuevaOrden = await ordenService.createOrdenCompra({
            fechaCompra: new Date(fechaCompra),
            total,
            usuarioDireccionId: Number(usuarioDireccionId),
        });
        res.status(201).json(nuevaOrden);
    } catch (error: any) {
        res.status(400).json({ error: error.message || "Error al crear la orden" });
    }
};
