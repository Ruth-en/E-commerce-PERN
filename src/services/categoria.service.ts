import { prisma } from "../models";

// Obtener todas las categorías
export const getAllCategorias = async () => {
    try {
        return await prisma.categoria.findMany({
            include: {
                productos: true
            }
        });
    } catch (error: any) {
        throw new Error("Error al obtener las categorías");
    }
};

// Obtener categoría por ID
export const getCategoriaById = async (id: number) => {
    try {
        return await prisma.categoria.findUnique({
            where: { id },
            include: { productos: true }
        });
    } catch (error: any) {
        throw new Error(`Error al obtener la categoría con ID ${id}`);
    }
};

// Crear una nueva categoría
export const createCategoria = async (data: { nombre: string }) => {
    try {
        return await prisma.categoria.create({ data });
    } catch (error: any) {
        throw new Error("Error al crear la categoría");
    }
};

// Actualizar una categoría por ID
export const updateCategoria = async (id: number, data: { nombre: string }) => {
    try {
        return await prisma.categoria.update({ where: { id }, data });
    } catch (error: any) {
        if (error.code === "P2025") {
            throw new Error(`No se encontró la categoría con ID ${id} para actualizar`);
        }
        throw new Error(`Error al actualizar la categoría: ${error.message}`);
    }
};

// Eliminar una categoría por ID
export const deleteCategoria = async (id: number) => {
    try {
        return await prisma.categoria.delete({ where: { id } });
    } catch (error: any) {
        if (error.code === "P2025") {
            throw new Error(`No se encontró la categoría con ID ${id} para eliminar`);
        }
        throw new Error(`Error al eliminar la categoría: ${error.message}`);
    }
};
