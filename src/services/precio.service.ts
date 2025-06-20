import { prisma } from "../models";

// Obtener todos los precios 
export const getAllPrecios = async () => {
    return prisma.precio.findMany({
        include: {
            detalles: true,
        }
    });
};

// Obtener un precio por ID
export const getAllPrecioById = async (id: number) => {
    return prisma.precio.findUnique({
        where: { id },
        include: {
            detalles: true,
        }
    });
};

// Crear un Precio
export const createPrecio = async (data: {
    precioCompra: number;
    precioVenta: number;
}) => {
    const { precioCompra, precioVenta } = data;
    if (precioVenta <= precioCompra) {
        throw new Error("El precio de Venta debe ser mayor al precio de costo.");
    }
    return prisma.precio.create({ data })
};

// Eliminar un Precio por ID
export const deletePrecioById = async (id: number) => {
    return prisma.precio.delete({ where: { id } });
};