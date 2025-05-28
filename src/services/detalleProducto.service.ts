import { prisma } from "../models"

//Obtener todos los DetallesProductos
export const getAllDetalleProductos = async () => {
    return prisma.detalle.findMany();
}

//Obtener un DetallesProducto por ID
export const getDetallesProductoById = async (id: bigint) => {
    return prisma.detalle.findUnique({ where: { id } });
}

// Crear DetallesProducto
export const createDetallesProducto = async (data: {
    color: string
    marca: string
    stock: number
    estado: boolean
    productoId: bigint
    talleId: bigint
    precioId: bigint
}) => {
    return prisma.detalle.create({ data });
}

// Actualizar un DetallesProducto por ID
export const updateDetallesProductoById = async (id: bigint, data: {
    color: string
    marca: string
    stock: number
    estado: boolean
    productoId: bigint
    talleId: bigint
    precioId: bigint
}) => {
    return prisma.detalle.update({ where: { id }, data });
}

//Eliminar un DetallesProducto por ID
export const deleteDetallesProductoById = async (id: bigint) => {
    return prisma.detalle.delete({ where: { id } });
}