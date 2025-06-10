-- DropForeignKey
ALTER TABLE "detalle_imagen" DROP CONSTRAINT "detalle_imagen_imagenId_fkey";

-- AddForeignKey
ALTER TABLE "detalle_imagen" ADD CONSTRAINT "detalle_imagen_imagenId_fkey" FOREIGN KEY ("imagenId") REFERENCES "imagen"("id") ON DELETE CASCADE ON UPDATE CASCADE;
