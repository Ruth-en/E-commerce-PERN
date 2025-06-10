-- DropForeignKey
ALTER TABLE "Detalle" DROP CONSTRAINT "Detalle_precioId_fkey";

-- DropForeignKey
ALTER TABLE "Detalle" DROP CONSTRAINT "Detalle_talleId_fkey";

-- DropForeignKey
ALTER TABLE "precio_descuento" DROP CONSTRAINT "precio_descuento_descuentoId_fkey";

-- DropForeignKey
ALTER TABLE "precio_descuento" DROP CONSTRAINT "precio_descuento_precioId_fkey";

-- DropIndex
DROP INDEX "Producto_categoriaId_key";

-- AlterTable
ALTER TABLE "Detalle" ALTER COLUMN "talleId" DROP NOT NULL,
ALTER COLUMN "precioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_talleId_fkey" FOREIGN KEY ("talleId") REFERENCES "talle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_precioId_fkey" FOREIGN KEY ("precioId") REFERENCES "precio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "precio_descuento" ADD CONSTRAINT "precio_descuento_precioId_fkey" FOREIGN KEY ("precioId") REFERENCES "precio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "precio_descuento" ADD CONSTRAINT "precio_descuento_descuentoId_fkey" FOREIGN KEY ("descuentoId") REFERENCES "descuento"("id") ON DELETE CASCADE ON UPDATE CASCADE;
