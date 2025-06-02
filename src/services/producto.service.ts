import { prisma } from "../models"

//Obtener todos los Productos
export const getAllProductos = async () => {
    return prisma.producto.findMany();
};

//Obtener un Producto por ID
export const getProductoById = async (id: number) => {
    return prisma.producto.findUnique({ where: { id } })
}

// Crear Producto
export const createProducto = async (data: {
    nombre: string;
    sexo: string;
    tipoProducto: number;
    categoriaId: number;
}) => {
    return prisma.producto.create({ data });
}

// Editar un Producto por ID
export const updateProductoById = async (id: number, data: {
    nombre: string;
    sexo: string;
    tipoProducto: number;
    categoriaId: number;
}) => {
    return prisma.producto.update({ where: { id }, data });
}

//Eliminar un usuario por ID
export const deleteProductoById = async (id: number) => {
    return prisma.producto.delete({ where: { id } });
}

