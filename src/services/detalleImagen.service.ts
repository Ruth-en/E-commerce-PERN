import { prisma } from "../models"

// Relacion imagen y detalleprodcto
export const addImagenToDetalleProducto = async (data: {
    detalleId: number;
    imagenId: number;
}) => {
    return prisma.detalleImagen.create({ data });
};

// 1. Obtener todas las relaciones detalle-imagen
export const getAllDetalleImagenes = async () => {
    return prisma.detalleImagen.findMany({
        include: {
            detalle: true,
            imagen: true,
        },
    });
};

// 2. Obtener una relación detalle-imagen por ID
export const getDetalleImagenById = async (id: number) => {
    return prisma.detalleImagen.findUnique({
        where: { id },
        include: {
            detalle: true,
            imagen: true,
        },
    });
};

// 4. Eliminar una relación detalle-imagen por ID
export const deleteDetalleImagenById = async (id: number) => {
    return prisma.detalleImagen.delete({
        where: { id },
    });
};
