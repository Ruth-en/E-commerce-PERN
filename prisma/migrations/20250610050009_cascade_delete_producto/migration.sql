-- DropForeignKey
ALTER TABLE "Detalle" DROP CONSTRAINT "Detalle_productoId_fkey";

-- DropForeignKey
ALTER TABLE "orden_compra_detalle" DROP CONSTRAINT "orden_compra_detalle_detalleId_fkey";

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orden_compra_detalle" ADD CONSTRAINT "orden_compra_detalle_detalleId_fkey" FOREIGN KEY ("detalleId") REFERENCES "Detalle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
