import { prisma } from "../models";

// Obtener todas las relaciones usuario-dirección
export const getAllUsuarioDirecciones = async () => {
    return prisma.usuarioDireccion.findMany({
        include: {
            usuario: true,
            direccion: true,
        },
    });
};

// Obtener una relación por ID
export const getUsuarioDireccionById = async (id: bigint) => {
    return prisma.usuarioDireccion.findUnique({
        where: { id },
        include: {
            usuario: true,
            direccion: true,
        },
    });
};

// Crear una nueva relación usuario-dirección
export const createUsuarioDireccion = async (usuarioId: bigint, direccionId: bigint) => {
    // Verificar si ya existe
    const existente = await prisma.usuarioDireccion.findUnique({
        where: {
            usuarioId_direccionId: {
                usuarioId,
                direccionId,
            },
        },
    });

    if (existente) {
        throw new Error("Esta relación ya existe");
    }

    return prisma.usuarioDireccion.create({
        data: {
            usuarioId,
            direccionId,
        },
    });
};

// Eliminar una relación por ID
export const deleteUsuarioDireccion = async (id: bigint) => {
    return prisma.usuarioDireccion.delete({
        where: { id },
    });
};
