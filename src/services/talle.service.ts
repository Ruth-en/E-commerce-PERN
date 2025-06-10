import { prisma } from "../models";

export const getAllTalles = async () => {
    try {
        return await prisma.talle.findMany({
            include: {
                detalles: true
            }
        });
    } catch (error) {
        throw new Error("Error al obtener los talles");
    }
};

export const getTalleById = async (id: number) => {
    try {
        const talle = await prisma.talle.findUnique({
            where: { id },
            include: {
                detalles: true
            }
        });

        if (!talle) throw new Error(`Talle con ID ${id} no encontrado`);
        return talle;
    } catch (error: any) {
        throw new Error(`Error al obtener el talle: ${error.message}`);
    }
};

export const createTalle = async (numero: string) => {
    try {
        return await prisma.talle.create({ data: { numero } });
    } catch (error: any) {
        throw new Error(`Error al crear el talle: ${error.message}`);
    }
};

export const updateTalleById = async (id: number, data: { numero: string }) => {
    try {
        return await prisma.talle.update({ where: { id }, data });
    } catch (error: any) {
        if (error.code === "P2025") {
            throw new Error(`No se encontró el talle con ID ${id} para actualizar`);
        }
        throw new Error(`Error al actualizar el talle: ${error.message}`);
    }
};

export const deleteTalleById = async (id: number) => {
    try {
        await prisma.talle.delete({ where: { id } });
        await prisma.ordenCompraDetalle.deleteMany({
            where: {
                detalle: {
                    talleId: {
                        equals: null,
                    },
                },
            },
        });
    } catch (error: any) {
        if (error.code === "P2025") {
            throw new Error(`No se encontró el talle con ID ${id} para eliminar`);
        }
        throw new Error(`Error al eliminar el talle: ${error.message}`);
    }
};
