-- DropForeignKey
ALTER TABLE "detalle_imagen" DROP CONSTRAINT "detalle_imagen_detalleId_fkey";

-- AddForeignKey
ALTER TABLE "detalle_imagen" ADD CONSTRAINT "detalle_imagen_detalleId_fkey" FOREIGN KEY ("detalleId") REFERENCES "Detalle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
