import { Request, Response } from "express";
import * as detalleImagenService from "../services/detalleImagen.service";

// GET /detalle-imagen
export const getAllDetalleImagenes = async (_req: Request, res: Response) => {
    try {
        const relaciones = await detalleImagenService.getAllDetalleImagenes();
        res.status(200).json(relaciones);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener las relaciones detalle-imagen" });
    }
};

// GET /detalle-imagen/:detalleId
export const getDetalleImagenById = async (req: Request, res: Response) => {
    const detalleId = Number(req.params.detalleId);
    if (isNaN(detalleId)) {
        res.status(400).json({ error: "ID de detalle inválido" });
        return
    }

    try {
        const relacion = await detalleImagenService.getDetalleImagenByDetalleId(detalleId);
        // El servicio lanza error si no encuentra, pero chequeamos por seguridad
        if (!relacion || relacion.length === 0) {
            res.status(404).json({ error: "Relación no encontrada" });
            return
        }
        res.status(200).json(relacion);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener la relación detalle-imagen" });
    }
};

// POST /detalle-imagen
export const addImagenToDetalleProducto = async (req: Request, res: Response) => {
    const { detalleId, imagenId } = req.body;

    if (detalleId === undefined || imagenId === undefined) {
        res.status(400).json({ error: "detalleId e imagenId son requeridos" });
        return
    }

    if (isNaN(Number(detalleId)) || isNaN(Number(imagenId))) {
        res.status(400).json({ error: "Los IDs deben ser números válidos" });
        return
    }

    try {
        const resultado = await detalleImagenService.addImagenToDetalleProducto({
            detalleId: Number(detalleId),
            imagenId: Number(imagenId),
        });
        res.status(201).json(resultado);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al asociar la imagen al detalle de producto" });
    }
};

// DELETE /detalle-imagen/:detalleId/:imagenId
export const deleteDetalleImagenById = async (req: Request, res: Response) => {
    const detalleId = Number(req.params.detalleId);
    const imagenId = Number(req.params.imagenId);

    if (isNaN(detalleId) || isNaN(imagenId)) {
        res.status(400).json({ error: "IDs inválidos" });
        return
    }

    try {
        await detalleImagenService.deleteDetalleImagenById(detalleId, imagenId);
        // 204 No Content no debe tener body

        res.status(204).json({ message: "Relación detalle-imagen eliminada correctamente" });
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al eliminar la relación detalle-imagen" });
    }
};

