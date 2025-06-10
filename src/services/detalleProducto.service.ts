import { prisma } from "../models"

//Obtener todos los DetallesProductos
export const getAllDetalleProductos = async () => {
    return prisma.detalle.findMany({
        include: {
            producto: true,
            talle: true,
            precio: true
        }
    });
}

//Obtener un DetallesProducto por ID
export const getDetallesProductoById = async (id: number) => {
    return prisma.detalle.findUnique({
        where: { id },
        include: {
            producto: true,
            talle: true,
            precio: true
        }
    });
}

// Crear DetallesProducto
export const createDetallesProducto = async (data: {
    color: string
    marca: string
    stock: number
    estado: boolean
    productoId: number
    talleId: number
    precioId: number
}) => {
    return prisma.detalle.create({ data });
}

// Actualizar un DetallesProducto por ID
export const updateDetallesProductoById = async (id: number, data: {
    color: string
    marca: string
    stock: number
    estado: boolean
    productoId: number
    talleId: number
    precioId: number
}) => {
    return prisma.detalle.update({ where: { id }, data });
}

//Eliminar un DetallesProducto por ID
export const deleteDetallesProductoById = async (id: number) => {
    return prisma.detalle.delete({ where: { id } });
}