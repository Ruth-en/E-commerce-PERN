import * as descuentoService from "../services/descuento.service";
import { Request, Response } from "express";

// GET /descuento
export const getAllDescuentos = async (req: Request, res: Response) => {
    try {
        const descuentos = await descuentoService.getAllDescuentos();
        res.status(200).json(descuentos);
    } catch (error) {
        console.error("Error en getAllDescuentos:", error);
        res.status(500).json({ error: "Error al obtener los descuentos." });
    }
};

// POST /descuento
export const createDescuento = async (req: Request, res: Response) => {
    try {
        const { fechaInicio, fechaFinal, porcentaje } = req.body;

        // Validación básica de campos requeridos
        if (!fechaInicio || !fechaFinal || porcentaje === undefined) {
            res.status(400).json({ error: "Todos los campos son requeridos." });
            return
        }

        // Validación de tipo y rango de porcentaje
        const parsedPorcentaje = Number(porcentaje);
        if (isNaN(parsedPorcentaje) || parsedPorcentaje <= 0 || parsedPorcentaje > 100) {
            res.status(400).json({ error: "El porcentaje debe ser un número entre 1 y 100." });
            return
        }

        const newDescuento = await descuentoService.createDescuento({
            fechaInicio: new Date(fechaInicio),
            fechaFinal: new Date(fechaFinal),
            porcentaje: parsedPorcentaje
        });

        res.status(201).json(newDescuento);
    } catch (error) {
        console.error("Error en createDescuento:", error);
        res.status(400).json({ error: (error as Error).message || "Error al crear el descuento." });
    }
};

// DELETE /descuento/:id
export const deleteDescuento = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            res.status(400).json({ error: "ID inválido." });
            return
        }

        await descuentoService.deleteDescuento(id);
        res.status(200).json({ message: "Descuento eliminado correctamente." });
    } catch (error) {
        console.error("Error en deleteDescuento:", error);
        res.status(400).json({ error: (error as Error).message || "Error al eliminar el descuento." });
    }
};
