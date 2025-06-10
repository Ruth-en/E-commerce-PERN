import { prisma } from "../models";

// Obtener todos los DetallesProductos
export const getAllDetalleProductos = async () => {
    try {
        return await prisma.detalle.findMany({
            include: {
                producto: true,
                talle: true,
                precio: true,
            },
        });
    } catch (error: any) {
        console.error("Error al obtener todos los detalles:", error);
        throw new Error("No se pudieron obtener los detalles de productos.");
    }
};

// Obtener un DetallesProducto por ID
export const getDetallesProductoById = async (id: number) => {
    try {
        const detalle = await prisma.detalle.findUnique({
            where: { id },
            include: {
                producto: true,
                talle: true,
                precio: true,
            },
        });

        if (!detalle) {
            throw new Error(`No se encontró el detalle con ID ${id}.`);
        }

        return detalle;
    } catch (error: any) {
        console.error(`Error al obtener el detalle con ID ${id}:`, error);
        throw new Error("No se pudo obtener el detalle del producto.");
    }
};

// Crear DetallesProducto
export const createDetallesProducto = async (data: {
    color: string;
    marca: string;
    stock: number;
    estado: boolean;
    productoId: number;
    talleId: number;
    precioId: number;
}) => {
    try {
        return await prisma.detalle.create({ data });
    } catch (error: any) {
        console.error("Error al crear el detalle:", error);
        throw new Error("No se pudo crear el detalle del producto. Verifica que los datos sean válidos.");
    }
};

// Actualizar un DetallesProducto por ID
export const updateDetallesProductoById = async (
    id: number,
    data: {
        color?: string;
        marca?: string;
        stock?: number;
        estado?: boolean;
        productoId?: number;
        talleId?: number;
        precioId?: number;
    }
) => {
    try {
        // Verifica existencia antes de actualizar
        const existente = await prisma.detalle.findUnique({ where: { id } });
        if (!existente) {
            throw new Error(`No se encontró el detalle con ID ${id} para actualizar.`);
        }

        return await prisma.detalle.update({ where: { id }, data });
    } catch (error: any) {
        console.error(`Error al actualizar el detalle con ID ${id}:`, error);
        throw new Error("No se pudo actualizar el detalle del producto.");
    }
};

// Eliminar un DetallesProducto por ID
export const deleteDetallesProductoById = async (id: number) => {
    try {
        // Verifica existencia antes de eliminar
        const existente = await prisma.detalle.findUnique({ where: { id } });
        if (!existente) {
            throw new Error(`No se encontró el detalle con ID ${id} para eliminar.`);
        }

        await prisma.detalle.delete({ where: { id } });
        return { message: `Detalle con ID ${id} eliminado correctamente.` };
    } catch (error: any) {
        console.error(`Error al eliminar el detalle con ID ${id}:`, error);
        throw new Error("No se pudo eliminar el detalle del producto.");
    }
};
