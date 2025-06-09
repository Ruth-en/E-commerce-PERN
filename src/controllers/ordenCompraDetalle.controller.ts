import { Request, Response } from "express";
import * as ordenDetalleService from "../services/ordenCompraDetalle.service";

// POST /orden-detalle
export const addDetalleToOrden = async (req: Request, res: Response) => {
    const { ordenCompraId, detalleId, cantidad } = req.body;

    if (!ordenCompraId || !detalleId) {
        res.status(400).json({ error: "Faltan campos requeridos: ordenCompraId y/o detalleId" });
        return
    }

    if (!cantidad) {
        res.status(400).json({ error: "Falta especificar la cantidad del producto" });
        return
    }

    try {
        const relacion = await ordenDetalleService.addDetalleToOrden({
            ordenCompraId: Number(ordenCompraId),
            detalleId: Number(detalleId),
            cantidad: Number(cantidad),
        });

        res.status(201).json(relacion);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al agregar detalle a la orden" });
    }
};

// GET /orden-detalle/
export const getAllDetallesOrden = async (req: Request, res: Response) => {
    try {
        const detalles = await ordenDetalleService.getAllDetalles();
        res.status(200).json(detalles);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener los detalles de la orden" });
    }
};

// GET /orden-detalle/:ordenCompraId
export const getDetallesByOrden = async (req: Request, res: Response) => {
    try {
        const ordenCompraId = Number(req.params.ordenCompraId);
        if (isNaN(ordenCompraId)) {
            res.status(400).json({ error: "ordenCompraId inválido" });
            return
        }
        const detalles = await ordenDetalleService.getDetallesByOrden(ordenCompraId);
        res.status(200).json(detalles);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener los detalles de la orden" });
    }
};

// DELETE /orden-detalle/:ordenCompraId/:detalleId
export const removeDetalleFromOrden = async (req: Request, res: Response) => {
    try {
        const ordenCompraId = Number(req.params.ordenCompraId);
        const detalleId = Number(req.params.detalleId);
        if (isNaN(ordenCompraId) || isNaN(detalleId)) {
            res.status(400).json({
                error: "ordenCompraId y detalleId deben ser números válidos",
            });
        }
        await ordenDetalleService.removeDetalleFromOrden(ordenCompraId, detalleId);
        res.status(200).json({ message: "Detalle eliminado de la orden correctamente" });
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al eliminar el detalle de la orden" });
    }
};
