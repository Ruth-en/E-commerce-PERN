import { prisma } from "../models"


// Obtener todas las categorias
export const getAllCategorias = async () => {
    return prisma.categoria.findMany();
}

// Obtener categoria por ID
export const getCategoriaById = async (id: bigint) => {
    return prisma.categoria.findUnique({ where: { id } })
}

// Crear una nueva categoria
export const createCategoria = async (data: {
    nombre: string;
}) => {
    return prisma.categoria.create({ data });
}

// Actualizamos una categoria por ID
export const updateCategoria = async (id: bigint, data: {
    nombre: string;
}) => {
    return prisma.categoria.update({ where: { id }, data });
}

// Eliminar categoria por ID
export const deleteCategoria = async (id: bigint) => {
    return prisma.categoria.delete({ where: { id } })
}