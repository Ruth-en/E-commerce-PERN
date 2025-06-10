import { prisma } from "../models";

// Agregar un producto (detalle) a una orden
export const addDetalleToOrden = async (data: {
    ordenCompraId: number;
    detalleId: number;
    cantidad: number;
}) => {
    return prisma.ordenCompraDetalle.create({ data });
};

// obtener todos los detalles de orden
export const getAllDetalles = async () => {
    return prisma.ordenCompraDetalle.findMany({
        include: {
            ordenCompra: true,
            detalle: true,
        }
    });
};

// Obtener detalles de una orden
export const getDetallesByOrden = async (ordenCompraId: number) => {
    return prisma.ordenCompraDetalle.findMany({
        where: { ordenCompraId },
        include: {
            ordenCompra: true,
            detalle: true,
        }
    });
};

// (Opcional) Eliminar un detalle de una orden
export const removeDetalleFromOrden = async (ordenCompraId: number, detalleId: number) => {
    return prisma.ordenCompraDetalle.delete({
        where: {
            ordenCompraId_detalleId: {
                ordenCompraId,
                detalleId,
            },
        },
    });
};
