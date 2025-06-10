import { prisma } from "../models"

//Obtener todos las Imagen
export const getAllImagen = async () => {
    return prisma.imagen.findMany({
        include: {
            detalleImagenes: true
        }
    })
}

//Obtener un Imagen por ID
export const getImagenById = async (id: number) => {
    return prisma.imagen.findUnique({
        where: { id },
        include: {
            detalleImagenes: true
        }
    })
}

// Crear Imagen
export const createImagen = async (data: { url: string }) => {
    return prisma.imagen.create({ data });
}

// Actualizar un Imagen por ID
export const updateImagenById = async (id: number, data: { url: string }) => {
    return prisma.imagen.update({ where: { id }, data })
}

//Eliminar un Imagen por ID
export const deleteImagenById = async (id: number) => {
    return prisma.imagen.delete({ where: { id } })
}
