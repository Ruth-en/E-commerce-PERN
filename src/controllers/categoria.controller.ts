import { Request, Response } from "express";
import * as categoriaService from "../services/categoria.service"

// GET /categoria
export const getAllCategorias = async (req: Request, res: Response) => {
    try {
        const categorias = await categoriaService.getAllCategorias();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las categorias" });
    }
};

// GET /categoria/:id
export const getCategoriaById = async (req: Request, res: Response) => {
    try {
        const id = BigInt(req.params.id);
        const categoria = await categoriaService.getCategoriaById(id);

        if (!categoria) {
            res.status(404).json({ error: "categoria no encontrado" });
            return
        }

        res.json(categoria);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la categoria" });
    }
};

// POST /categoria
export const createCategoria = async (req: Request, res: Response) => {
    try {
        const { nombre } = req.body;

        if (!nombre) {
            res.status(400).json({ error: "El campo 'nombre' es requerido" });
            return
        }
        const newCategoria = await categoriaService.createCategoria({ nombre });
        res.status(201).json(newCategoria);
    } catch (error) {
        res.status(400).json({ error: "Error al crear una categoria" });
    }
};

// PUT /categoria/:id
export const updateCategoriaById = async (req: Request, res: Response) => {
    try {
        const id = BigInt(req.params.id);
        const categoriaActualizada = await categoriaService.updateCategoria(id, req.body);
        res.json(categoriaActualizada);
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar la categoria" });
    }
};

// DELETE /categoria/:id
export const deleteCategoria = async (req: Request, res: Response) => {
    try {
        const id = BigInt(req.params.id);
        await categoriaService.deleteCategoria(id);
        res.status(204).json({ message: "Imagen eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ error: "Error al eliminar la categoria" });
    }
};
