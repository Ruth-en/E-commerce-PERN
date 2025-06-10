/*
  Warnings:

  - The primary key for the `detalle_imagen` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `detalle_imagen` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "detalle_imagen" DROP CONSTRAINT "detalle_imagen_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "detalle_imagen_pkey" PRIMARY KEY ("detalleId", "imagenId");
