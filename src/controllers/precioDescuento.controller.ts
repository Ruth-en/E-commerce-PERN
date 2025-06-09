import { Request, Response } from "express";
import * as precioDescuentoService from "../services/precioDescuento.service";

// 1. POST /precio-descuento  -> agrega relación Precio-Descuento
export const addDescuentoToPrecio = async (req: Request, res: Response) => {
    const { precioId, descuentoId } = req.body;

    if (!precioId || !descuentoId) {
        res.status(400).json({ error: "precioId y descuentoId son requeridos" });
        return
    }

    try {
        const resultado = await precioDescuentoService.addDescuentoToPrecio({
            precioId: Number(precioId),
            descuentoId: Number(descuentoId),
        });
        res.status(201).json(resultado);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al agregar descuento a precio" });
    }
};

// 2. DELETE /precio-descuento  -> elimina relación Precio-Descuento
// Recibe precioId y descuentoId en body (o podría ser en query params)
export const removeDescuentoFromPrecio = async (req: Request, res: Response) => {
    const { precioId, descuentoId } = req.body;

    if (!precioId || !descuentoId) {
        res.status(400).json({ error: "precioId y descuentoId son requeridos" });
        return
    }

    try {
        const resultado = await precioDescuentoService.removeDescuentoFromPrecio({
            precioId: Number(precioId),
            descuentoId: Number(descuentoId),
        });
        res.status(200).json({ mensaje: "Relación Precio-Descuento eliminada", resultado });
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al eliminar relación Precio-Descuento" });
    }
};

// 3. GET /precios/:precioId/descuentos  -> obtener descuentos de un precio
export const getDescuentosByPrecio = async (req: Request, res: Response) => {
    const { precioId } = req.params;

    try {
        const descuentos = await precioDescuentoService.getDescuentosByPrecio(Number(precioId));
        res.status(200).json(descuentos);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener descuentos por precio" });
    }
};

// 4. GET /descuentos/:descuentoId/precios  -> obtener precios con un descuento específico
export const getPreciosByDescuento = async (req: Request, res: Response) => {
    const { descuentoId } = req.params;

    try {
        const precios = await precioDescuentoService.getPreciosByDescuento(Number(descuentoId));
        res.status(200).json(precios);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener precios por descuento" });
    }
};

