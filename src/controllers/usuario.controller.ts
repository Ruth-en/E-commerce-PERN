import { Request, Response } from "express";
import * as usuarioService from "../services/usuarios.service";

// GET /usuarios
export const getUsuarios = async (_req: Request, res: Response) => {
    try {
        const usuarios = await usuarioService.getAllUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
};

// GET /usuarios/:id
export const getUsuarioById = async (req: Request, res: Response) => {
    const id = BigInt(req.params.id);

    try {
        const usuario = await usuarioService.getUsuarioById(id);
        if (!usuario) {
            res.status(404).json({ error: "Usuario no encontrado" });
            return 
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el usuario" });
    }
};

// POST /usuarios
export const createUsuario = async (req: Request, res: Response) => {
    const { nombre, email, contrasena, dni, rol } = req.body;

    try {
        const nuevoUsuario = await usuarioService.createUsuario({ nombre, email, contrasena, dni, rol });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el usuario" });
    }
};

// PUT /usuarios/:id
export const updateUsuario = async (req: Request, res: Response) => {
    const id = BigInt(req.params.id);
    const { nombre, email, contrasena, dni, rol } = req.body;

    try {
        const usuarioActualizado = await usuarioService.updateUsuario(id, {
            data: { nombre, email, contrasena, dni, rol }
        });
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el usuario" });
    }
};

// DELETE /usuarios/:id
export const deleteUsuario = async (req: Request, res: Response) => {
    const id = BigInt(req.params.id);

    try {
        await usuarioService.deleteUsuario(id);
        res.json({ mensaje: "Usuario eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el usuario" });
    }
};
