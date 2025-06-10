/*
  Warnings:

  - A unique constraint covering the columns `[categoriaId]` on the table `Producto` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Producto" DROP CONSTRAINT "Producto_categoriaId_fkey";

-- DropIndex
DROP INDEX "Producto_categoriaId_idx";

-- AlterTable
ALTER TABLE "Producto" ALTER COLUMN "categoriaId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "Producto_categoriaId_key" ON "Producto"("categoriaId");

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;
