import { prisma } from "../models";

// Obtener todas las órdenes
export const getAllOrdenes = async () => {
    return prisma.ordenCompra.findMany({
        include: {
            detalles: {
                include: {
                    detalle: true, // Incluye el detalle del producto
                },
            },
            usuarioDireccion: true,
        },
    });
};

// Obtener una orden por ID (con detalles)
export const getOrdenById = async (id: bigint) => {
    return prisma.ordenCompra.findUnique({
        where: { id },
        include: {
            detalles: {
                include: {
                    detalle: true,
                },
            },
            usuarioDireccion: true,
        },
    });
};

// Crear una nueva orden
export const createOrdenCompra = async (data: {
    fechaCompra: Date;
    total: number;
    usuarioDireccionId: bigint;
}) => {
    return prisma.ordenCompra.create({
        data,
    });
};
