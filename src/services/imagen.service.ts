import { prisma } from "../models"

//Obtener todos las Imagen
export const getAllImagen = async () => {
    return prisma.imagen.findMany()
}

//Obtener un Imagen por ID
export const getImagenById = async (id: bigint) => {
    return prisma.imagen.findUnique({ where: { id } })
}

// Crear Imagen
export const createTalle = async (data: { url: string }) => {
    return prisma.imagen.create({ data });
}

// Actualizar un Imagen por ID
export const updateImagenById = async (id: bigint, data: { url: string }) => {
    return prisma.imagen.update({ where: { id }, data })
}

//Eliminar un Imagen por ID
export const ProductoImagenById = async (id: bigint) => {
    return prisma.imagen.delete({ where: { id } })
}
