import { Request, Response } from "express";
import * as productoService from "../services/producto.service";

// GET /productos -> Obtener todos los productos
export const getAllProductos = async (_req: Request, res: Response) => {
    try {
        const productos = await productoService.getAllProductos();
        res.json(productos);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener productos" });
    }
};

// GET /productos/:id -> Obtener un producto por ID
export const getProductoById = async (req: Request, res: Response) => {
    try {
        const id = BigInt(req.params.id);
        const producto = await productoService.getProductoById(id);
        if (!producto) {
            res.status(404).json({ error: "Producto no encontrado" });
            return 
        }
        res.json(producto);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al obtener producto" });
    }
};

// POST /productos -> Crear un producto
export const createProducto = async (req: Request, res: Response) => {
    const { nombre, sexo, tipoProducto, categoriaId } = req.body;

    if (
        typeof nombre !== "string" ||
        typeof sexo !== "string" ||
        typeof tipoProducto !== "number" ||
        !categoriaId
    ) {
        res.status(400).json({ error: "Datos inválidos para crear producto" });
        return 
    }

    try {
        const nuevoProducto = await productoService.createProducto({
            nombre,
            sexo,
            tipoProducto,
            categoriaId: BigInt(categoriaId),
        });
        res.status(201).json(nuevoProducto);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al crear producto" });
    }
};

// PUT /productos/:id -> Editar un producto por ID
export const updateProductoById = async (req: Request, res: Response) => {
    const id = BigInt(req.params.id);
    const { nombre, sexo, tipoProducto, categoriaId } = req.body;

    if (
        typeof nombre !== "string" ||
        typeof sexo !== "string" ||
        typeof tipoProducto !== "number" ||
        !categoriaId
    ) {
        res.status(400).json({ error: "Datos inválidos para actualizar producto" });
        return 
    }

    try {
        const productoActualizado = await productoService.updateProductoById(id, {
            nombre,
            sexo,
            tipoProducto,
            categoriaId: BigInt(categoriaId),
        });
        res.json(productoActualizado);
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al actualizar producto" });
    }
};

// DELETE /productos/:id -> Eliminar un producto por ID
export const deleteProductoById = async (req: Request, res: Response) => {
    try {
        const id = BigInt(req.params.id);
        await productoService.deleteProductoById(id);
        res.json({ mensaje: "Producto eliminado correctamente" });
    } catch (error: any) {
        res.status(500).json({ error: error.message || "Error al eliminar producto" });
    }
};
