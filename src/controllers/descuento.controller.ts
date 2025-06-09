import * as descuentoServie from "../services/descuento.service"
import { Request, Response } from "express";

// GET /descuento
export const getAllDescuentos = async (req: Request, res: Response) => {
    try {
        const descuentos = await descuentoServie.getAllDescuentos();
        res.status(200).json(descuentos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los descuentos" });
    }
};

// POST /descuento
export const createDescuento = async (req: Request, res: Response) => {
    try {
        const { fechaInicio, fechaFinal, porcentaje } = req.body;

        if (!fechaInicio || !fechaFinal || !porcentaje) {
            res.status(400).json({ error: "Todos los campos son requeridos" });
            return
        }

        if (isNaN(porcentaje) || porcentaje < 0 || porcentaje > 100) {
            res.status(400).json({ error: "El porcentaje debe ser un número entre 0 y 100" });
            return
        }

        const newDescuento = await descuentoServie.createDescuento({
            fechaInicio,
            fechaFinal,
            porcentaje: Number(porcentaje)
        });
        
        res.status(201).json(newDescuento);
    } catch (error) {
        res.status(400).json({ error: "Error al crear una descuento" });
    }
};

// DELETE /descuento/:id
export const deleteDescuento = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            res.status(400).json({ error: "ID inválido" });
            return
        }
        await descuentoServie.deleteDescuento(id);
        res.status(204).json({ message: "Descuento eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el descuento" });
    }
};
