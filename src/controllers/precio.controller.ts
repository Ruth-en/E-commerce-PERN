import { Request, Response } from "express";
import * as precioService from "../services/precio.service";

// GET /precios
export const getPrecios = async (_req: Request, res: Response) => {
    try {
        const precios = await precioService.getAllPrecios();
        res.status(200).json(precios);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los precios" });
    }
};

// GET /precios/:id
export const getPrecio = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const precio = await precioService.getAllPrecioById(id);
        if (!precio) {
            res.status(404).json({ error: "Precio no encontrado" });
            return;
        }
        res.status(200).json(precio);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el precio" });
    }
};

// POST /precios
export const createPrecio = async (req: Request, res: Response) => {
    const { precioCompra, precioVenta } = req.body;

    if (typeof precioCompra !== "number" || typeof precioVenta !== "number") {
        res.status(400).json({ error: "precioCompra y precioVenta deben ser números" });
        return;
    }

    try {
        const nuevoPrecio = await precioService.createPrecio({ precioCompra, precioVenta });
        res.status(201).json(nuevoPrecio);
    } catch (error: any) {
        res.status(400).json({ error: error.message || "Error al crear el precio" });
    }
};

// DELETE /precios/:id
export const deletePrecio = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        await precioService.deletePrecioById(id);
        res.status(200).json({ mensaje: "Precio eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el precio" });
    }
};
