import { prisma } from "../models";

// 1. Agregar relación Precio-Descuento
export const addDescuentoToPrecio = async (data: {
    precioId: number;
    descuentoId: number;
}) => {
    return prisma.precioDescuento.create({ data });
};

// 2. Eliminar relación Precio-Descuento
export const removeDescuentoFromPrecio = async (data: {
    precioId: number;
    descuentoId: number;
}) => {
    return prisma.precioDescuento.delete({
        where: {
            precioId_descuentoId: {
                precioId: data.precioId,
                descuentoId: data.descuentoId,
            },
        },
    });
};

// 3. Obtener descuentos de un precio
export const getDescuentosByPrecio = async (precioId: number) => {
    return prisma.precioDescuento.findMany({
        where: { precioId },
        include: { descuento: true },
    });
};

// 4. Obtener precios que tienen un descuento específico
export const getPreciosByDescuento = async (descuentoId: number) => {
    return prisma.precioDescuento.findMany({
        where: { descuentoId },
        include: { precio: true },
    });
};