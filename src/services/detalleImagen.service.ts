import { prisma } from "../models"

// Relacion imagen y detalleprodcto
export const addImagenToDetalleProducto = async (data: {
    detalleId: bigint;
    imagenId: bigint;
}) => {
    return prisma.detalleImagen.create({ data });
};
