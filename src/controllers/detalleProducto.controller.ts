import { Request, Response } from "express";
import * as detalleService from "../services/detalleProducto.service";

// GET /detalles-productos
export const getAllDetalleProductos = async (_req: Request, res: Response) => {
    try {
        const detalles = await detalleService.getAllDetalleProductos();
        res.json(detalles);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener los detalles de productos" });
    }
};

// GET /detalles-productos/:id
export const getDetallesProductoById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const detalle = await detalleService.getDetallesProductoById(id);
        if (!detalle) {
            res.status(404).json({ error: "Detalle de producto no encontrado" });
            return
        }
        res.json(detalle);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener el detalle de producto" });
    }
};

// POST /detalles-productos
export const createDetallesProducto = async (req: Request, res: Response) => {
    const { color, marca, stock, estado, productoId, talleId, precioId } = req.body;

    if (!color || !marca || typeof stock !== "number" || typeof estado !== "boolean"
        || !productoId || !talleId || !precioId) {
        res.status(400).json({ error: "Faltan campos requeridos o tipos incorrectos" });
        return
    }

    try {
        const nuevoDetalle = await detalleService.createDetallesProducto({
            color,
            marca,
            stock,
            estado,
            productoId: Number(productoId),
            talleId: Number(talleId),
            precioId: Number(precioId)
        });
        res.status(201).json(nuevoDetalle);
    } catch (error: any) {
        res.status(400).json({ error: error.message || "Error al crear el detalle del producto" });
    }
};

// PUT /detalles-productos/:id
export const updateDetallesProductoById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { color, marca, stock, estado, productoId, talleId, precioId } = req.body;

    try {
        const detalleActualizado = await detalleService.updateDetallesProductoById(id, {
            color,
            marca,
            stock,
            estado,
            productoId: Number(productoId),
            talleId: Number(talleId),
            precioId: Number(precioId)
        });
        res.json(detalleActualizado);
    } catch (error: any) {
        res.status(400).json({ error: error.message || "Error al actualizar el detalle del producto" });
    }
};

// DELETE /detalles-productos/:id
export const deleteDetallesProductoById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        await detalleService.deleteDetallesProductoById(id);
        res.json({ mensaje: "Detalle de producto eliminado con éxito" });
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al eliminar el detalle del producto" });
    }
};
