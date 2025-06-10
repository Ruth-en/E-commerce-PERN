import { prisma } from "../models";

// Crear relación imagen-detalle
export const addImagenToDetalleProducto = async (data: {
    detalleId: number;
    imagenId: number;
}) => {
    try {
        return await prisma.detalleImagen.create({ data });
    } catch (error: any) {
        console.error("Error al agregar imagen al detalle:", error);

        // Podrías intentar detectar el código de error igual, pero sin el tipo
        if (error.code === 'P2003') {
            throw new Error("La imagen o el detalle no existen (clave foránea inválida).");
        } else if (error.code === 'P2002') {
            throw new Error("Ya existe esta relación entre imagen y detalle.");
        }

        throw new Error("No se pudo agregar la imagen al detalle.");
    }
};

// Obtener todas las relaciones detalle-imagen
export const getAllDetalleImagenes = async () => {
    try {
        return await prisma.detalleImagen.findMany({
            include: {
                detalle: true,
                imagen: true,
            },
        });
    } catch (error) {
        console.error("Error al obtener las relaciones detalle-imagen:", error);
        throw new Error("No se pudieron obtener las relaciones detalle-imagen.");
    }
};

// Obtener relaciones por detalleId
export const getDetalleImagenByDetalleId = async (detalleId: number) => {
    try {
        const relaciones = await prisma.detalleImagen.findMany({
            where: { detalleId },
            include: {
                detalle: true,
                imagen: true,
            },
        });

        if (!relaciones || relaciones.length === 0) {
            throw new Error(`No se encontraron imágenes para el detalle con ID ${detalleId}.`);
        }

        return relaciones;
    } catch (error) {
        console.error(`Error al obtener imágenes del detalle con ID ${detalleId}:`, error);
        throw new Error("No se pudo obtener la relación imagen-detalle.");
    }
};

// Eliminar una relación detalle-imagen por ID compuesto
export const deleteDetalleImagenById = async (detalleId: number, imagenId: number) => {
    try {
        // Asegurar existencia antes de eliminar
        const existe = await prisma.detalleImagen.findUnique({
            where: {
                detalleId_imagenId: {
                    detalleId,
                    imagenId,
                },
            },
        });

        if (!existe) {
            throw new Error(`No existe la relación imagen-detalle con detalleId ${detalleId} e imagenId ${imagenId}.`);
        }

        await prisma.detalleImagen.delete({
            where: {
                detalleId_imagenId: {
                    detalleId,
                    imagenId,
                },
            },
        });

        return { message: "Relación imagen-detalle eliminada correctamente." };
    } catch (error) {
        console.error(`Error al eliminar relación imagen-detalle con detalleId ${detalleId} e imagenId ${imagenId}:`, error);
        throw new Error("No se pudo eliminar la relación imagen-detalle.");
    }
};
