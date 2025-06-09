import { prisma } from "../models";

// Obtener todas las órdenes
export const getAllOrdenes = async () => {
    const ordenes = await prisma.ordenCompra.findMany({
        include: {
            detalles: {
                include: {
                    detalle: {
                        include: {
                            precio: true,
                        },
                    }
                },
            },
            usuarioDireccion: true,
        },
    });

    return ordenes.map((orden) => {
        const total = orden.detalles.reduce((acc, item) => {
            const precioVenta = item.detalle.precio?.precioVenta || 0;
            return acc + precioVenta * item.cantidad;
        }, 0);
        
        return {
            ...orden,
            totalCalculado: total,
        };
    });
};

// Obtener una orden por ID (con detalles)
export const getOrdenById = async (id: number) => {
    const orden = await prisma.ordenCompra.findUnique({
        where: { id },
        include: {
            detalles: {
                include: {
                    detalle: {
                        include: {
                            precio: true,
                        },
                    },
                },
            },
            usuarioDireccion: true,
        },
    });

    if (!orden) return null;

    const total = orden.detalles.reduce((acc, item) => {
        const precioVenta = item.detalle.precio?.precioVenta || 0;
        return acc + precioVenta * item.cantidad;
    }, 0);

    return {
        ...orden,
        totalCalculado: total,
    };
};


// Crear una nueva orden
export const createOrdenCompra = async (data: {
    fechaCompra: Date;
    usuarioDireccionId: number;
}) => {
    return prisma.ordenCompra.create({
        data:{
            ...data,
            total: 0,
        }
    });
};

// Eliminar una orde
export const deleteOrdenCompra = async (id: number) => {
    return await prisma.$transaction(async (tx) => {
        // Eliminar los detalles relacionados primero
        await tx.ordenCompraDetalle.deleteMany({
            where: {
                ordenCompraId: id,
            },
        });

        // Luego eliminar la orden
        return await tx.ordenCompra.delete({
            where: { id },
        });
    });
}