import { prisma } from "../models"

//Obtener todos los Productos
export const getAllProductos = async () => {
    return prisma.producto.findMany();
};

//Obtener un Producto por ID
export const getProductoById = async (id: bigint) => {
    return prisma.producto.findUnique({ where: { id } })
}

// Crear Producto
export const createProducto = async (data: {
    nombre: string;
    sexo: string;
    tipoProducto: number;
    categoriaId: bigint;
}) => {
    return prisma.producto.create({ data });
}

// Editar un Producto por ID
export const updateProductoById = async (id: bigint, data: {
    nombre: string;
    sexo: string;
    tipoProducto: number;
    categoriaId: bigint;
}) => {
    return prisma.producto.update({ where: { id }, data });
}

//Eliminar un usuario por ID
export const ProductoProductoById = async (id: bigint) => {
    return prisma.producto.delete({ where: { id } });
}


// import { prisma } from "../models"

// //Obtener todos los Productos
// export const getAllProductos = async () => {
//     return prisma.
// }

// //Obtener un Producto por ID
// export const getProductoById  = async () => {
//     return prisma.producto
// }

// // Crear Producto
// export const createProducto = async () => {
//     return prisma.
// }

// // Editar un Producto por ID
// export const updateProductoById  = async () => {
//     return prisma.
// }

// //Eliminar un usuario por ID
// export const ProductoProductoById  = async () => {
//     return prisma.
// }