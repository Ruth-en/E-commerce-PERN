import { prisma } from "../models"

// Obtener todas las direcciones
export const getAllDirecciones = async () => {
    return prisma.direccion.findMany({
        include:{
            usuarioDireccion: true
        }
    })
}

// Obtener una dirección por ID
export const getAllDireccionesById = async (id: number) => {
    return prisma.direccion.findUnique({
        where: { id },
        include:{
            usuarioDireccion: true
        }
    })
}

// Crear una nueva dirección
export const createDireccion = async (data: {
    pais: string;
    provincia: string;
    departamento: string;
    localidad: string;
}) => {
    return prisma.direccion.create({ data })
}

// Actualizar una dirección por ID
export const updateDireccionById = async (id: number, data: {
    pais: string;
    provincia: string;
    departamento: string;
    localidad: string;
}) => {
    return prisma.direccion.update({ where: { id }, data })
}

// Eliminar una dirección por ID
export const deleteDireccion = async (id: number) => {
    return prisma.direccion.delete({ where: { id } });
};