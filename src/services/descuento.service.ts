import { prisma } from "../models";

// Obtener todos los descuentos
export const getAllDescuentos = async () => {
    return prisma.descuento.findMany({
        include:{
            precios:true
        }
    });
};

// crear un descuento
export const createDescuento = async (data: {
    fechaInicio: Date;
    fechaFinal: Date;
    porcentaje: number;
}) => {
    const { fechaInicio, fechaFinal } = data;

    if (fechaInicio >= fechaFinal) {
        throw new Error("La fecha de inicio debe ser anterior a la fecha final.");
    }
    return prisma.descuento.create({ data });
};

// Elimiar descuento
export const deleteDescuento = async (id: number) => {
    return prisma.descuento.delete({ where: { id } })
}