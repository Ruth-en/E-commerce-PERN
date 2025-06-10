import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import * as usuarioService from "../services/usuarios.service";

// GET /usuarios
export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await usuarioService.getAllUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
};

// GET /usuarios/:id
export const getUsuarioById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
        const usuario = await usuarioService.getUsuarioById(id);
        if (!usuario) {
            res.status(404).json({ error: "Usuario no encontrado" });
            return
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el usuario" });
    }
};

// POST /usuarios
export const createUsuario = async (req: Request, res: Response) => {
    const { nombre, email, contrasena, dni, rol } = req.body;

    try {
        const hash = await bcrypt.hash(contrasena, 10);
        const nuevoUsuario = await usuarioService.createUsuario({ nombre, email, contrasena: hash, dni, rol });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el usuario" });
    }
};

// PUT /usuarios/:id
export const updateUsuario = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { nombre, email, contrasena, dni } = req.body;

    try {
        const dataToUpdate: any = {};

        if (nombre) dataToUpdate.nombre = nombre;
        if (email) dataToUpdate.email = email;
        if (contrasena) dataToUpdate.contrasena = await bcrypt.hash(contrasena, 10);
        if (dni) dataToUpdate.dni = dni;

        const usuarioActualizado = await usuarioService.updateUsuario(id, dataToUpdate);
        res.status(201).json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el usuario" });
    }
};

// Desactivar un Usuario
// controllers/usuarioController.ts
export const desactivarUsuario = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            res.status(400).json({ error: 'ID inválido' });
            return
        }

        const usuario = await usuarioService.desactivarUsuario(id);

        if (!usuario) {
            res.status(404).json({ error: 'Usuario no encontrado' });
            return
        }

        res.json({
            mensaje: 'Usuario desactivado correctamente',
            usuario
        });
    } catch (error) {
        console.error('Error al desactivar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


// DELETE /usuarios/:id
// export const deleteUsuario = async (req: Request, res: Response) => {
//     const id = Number(req.params.id);

//     try {
//         await usuarioService.deleteUsuario(id);
//         res.status(200).json({ mensaje: "Usuario eliminado con éxito" }).end();
//     } catch (error) {
//         res.status(500).json({ error: "Error al eliminar el usuario" });
//     }
// };
