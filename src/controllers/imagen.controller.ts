import { Request, Response } from "express";
import * as imagenService from "../services/imagen.service"

// GET /imagen
export const getAllImagenes = async (req: Request, res: Response) => {
    try {
        const imagenes = await imagenService.getAllImagen();
        res.status(200).json(imagenes);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las imagenes" });
    }
};

// GET /imagen/:id
export const getImagenById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const imagen = await imagenService.getImagenById(id);

        if (!imagen) {
            res.status(404).json({ error: "Imagen no encontrado" });
            return
        }

        res.status(200).json(imagen);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la imagen" });
    }
};

// POST /imagen
export const createImagen = async (req: Request, res: Response) => {
    try {
        const { url } = req.body;

        if (!url) {
            res.status(400).json({ error: "El campo 'url' es requerido" });
            return
        }
        const newImagen = await imagenService.createImagen({ url });
        res.status(201).json(newImagen);
    } catch (error) {
        res.status(400).json({ error: "Error al crear una imagen" });
    }
};

// PUT /imagen/:id
export const updateImagenById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const imagenActualizada = await imagenService.updateImagenById(id, req.body);
        res.status(201).json(imagenActualizada);
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar la imagen" });
    }
};

// DELETE /imagen/:id
export const deleteImagen = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        await imagenService.deleteImagenById(id);
        res.status(204).json({ message: "Imagen eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ error: "Error al eliminar la imagen" });
    }
};
