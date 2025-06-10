import { prisma } from "../models";

// Obtener todos los descuentos
export const getAllDescuentos = async () => {
    try {
        return await prisma.descuento.findMany({
            include: {
                precios: true,
            },
        });
    } catch (error) {
        console.error('Error al obtener descuentos:', error);
        throw new Error('No se pudieron obtener los descuentos.');
    }
};

// Crear un nuevo descuento
export const createDescuento = async (data: {
    fechaInicio: Date;
    fechaFinal: Date;
    porcentaje: number;
}) => {
    try {
        const { fechaInicio, fechaFinal, porcentaje } = data;

        if (fechaInicio >= fechaFinal) {
            throw new Error("La fecha de inicio debe ser anterior a la fecha final.");
        }

        if (porcentaje <= 0 || porcentaje > 100) {
            throw new Error("El porcentaje debe estar entre 1 y 100.");
        }

        return await prisma.descuento.create({ data });
    } catch (error) {
        console.error('Error al crear el descuento:', error);
        throw new Error('No se pudo crear el descuento. ' + (error as Error).message);
    }
};

// Eliminar un descuento
export const deleteDescuento = async (id: number) => {
    try {
        // Validar que el descuento exista antes de eliminarlo
        const existe = await prisma.descuento.findUnique({ where: { id } });

        if (!existe) {
            throw new Error(`No se encontró un descuento con ID ${id}.`);
        }

        return await prisma.descuento.delete({ where: { id } });
    } catch (error) {
        console.error(`Error al eliminar el descuento con ID ${id}:`, error);
        throw new Error('No se pudo eliminar el descuento. ' + (error as Error).message);
    }
};
