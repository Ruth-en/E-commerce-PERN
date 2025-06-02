import { prisma } from "../models"

//Obtener todos los Talles
export const getAllTalles = async () => {
    return prisma.talle.findMany()
}

//Obtener un Talle por ID
export const getTalleById = async (id: number) => {
    return prisma.talle.findUnique({ where: { id } })
}

// Crear Talle
export const createTalle = async (data: { numero: string }) => {
    return prisma.talle.create({ data });
}

// Actualizar un Talle por ID
export const updateTalleById = async (id: number, data: { numero: string }) => {
    return prisma.talle.update({ where: { id }, data })
}

//Eliminar un Talle por ID
export const deleteTalleById = async (id: number) => {
    return prisma.talle.delete({ where: { id } })
}