import { Rol } from "../generated/prisma";
import { prisma } from "../models"

// Obtenemos todos los usuarios
export const getAllUsuarios = async () => {
    return prisma.usuario.findMany();
}

// Obtenemos un Usuario por ID
export const getUsuarioById = async (id: bigint) => {
    return prisma.usuario.findUnique({ where: { id } });
}

// Crear un Usuario
export const createUsuario = async (data: {
    nombre: string;
    email: string;
    contrasena: string;
    dni: string;
    rol: "ADMIN" | "CLIENTE";
}) => {
    return prisma.usuario.create({ data })
}

// Actualizar un usuario por ID
export const updateUsuario = async (id: bigint, data: {
    data: {
        nombre: string;
        email: string;
        contrasena: string;
        dni: string;
        rol: "ADMIN" | "CLIENTE";
    }
}) => {
    return prisma.usuario.update({ where: { id }, data })
}

// Eliminar usuario po ID
export const deleteUsuario = async (id: bigint) => {
    return prisma.usuario.delete({ where: { id } })
}
