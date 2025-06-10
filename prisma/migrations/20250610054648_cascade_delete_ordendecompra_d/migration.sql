-- DropForeignKey
ALTER TABLE "orden_compra_detalle" DROP CONSTRAINT "orden_compra_detalle_orden_compra_id_fkey";

-- AddForeignKey
ALTER TABLE "orden_compra_detalle" ADD CONSTRAINT "orden_compra_detalle_orden_compra_id_fkey" FOREIGN KEY ("orden_compra_id") REFERENCES "orden_compra"("id") ON DELETE CASCADE ON UPDATE CASCADE;
