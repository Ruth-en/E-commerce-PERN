import { Request, Response } from "express";
import * as detalleImagenService from "../services/detalleImagen.service";

// GET /detalle-imagen
export const getAllDetalleImagenes = async (_req: Request, res: Response) => {
    try {
        const relaciones = await detalleImagenService.getAllDetalleImagenes();
        res.json(relaciones);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener las relaciones detalle-imagen" });
    }
};

// GET /detalle-imagen/:detalleId
export const getDetalleImagenById = async (req: Request, res: Response) => {
    const id = BigInt(req.params.detalleId);
    try {
        const relacion = await detalleImagenService.getDetalleImagenById(id);
        if (!relacion) {
            res.status(404).json({ error: "Relación no encontrada" });
            return
        }
        res.json(relacion);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener la relación detalle-imagen" });
    }
};

// POST /detalle-imagen
export const addImagenToDetalleProducto = async (req: Request, res: Response) => {
    const { detalleId, imagenId } = req.body;

    if (!detalleId || !imagenId) {
        res.status(400).json({ error: "detalleId e imagenId son requeridos" });
        return
    }

    try {
        const resultado = await detalleImagenService.addImagenToDetalleProducto({
            detalleId: BigInt(detalleId),
            imagenId: BigInt(imagenId),
        });
        res.status(201).json(resultado);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al asociar la imagen al detalle de producto" });
    }
};

// DELETE /detalle-imagen/:id
export const deleteDetalleImagenById = async (req: Request, res: Response) => {
    const id = BigInt(req.params.id);
    try {
        await detalleImagenService.deleteDetalleImagenById(id);
        res.json({ message: "Relación detalle-imagen eliminada correctamente" });
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al eliminar la relación detalle-imagen" });
    }
};

