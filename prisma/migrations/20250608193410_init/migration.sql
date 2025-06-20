-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('ADMIN', 'CLIENTE');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "rol" "Rol" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Direccion" (
    "id" SERIAL NOT NULL,
    "pais" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "localidad" TEXT NOT NULL,

    CONSTRAINT "Direccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioDireccion" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "direccion_id" INTEGER NOT NULL,

    CONSTRAINT "UsuarioDireccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "tipoProducto" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detalle" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "estado" BOOLEAN NOT NULL,
    "productoId" INTEGER NOT NULL,
    "talleId" INTEGER NOT NULL,
    "precioId" INTEGER NOT NULL,

    CONSTRAINT "Detalle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "talle" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,

    CONSTRAINT "talle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagen" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "imagen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detalle_imagen" (
    "id" SERIAL NOT NULL,
    "detalleId" INTEGER NOT NULL,
    "imagenId" INTEGER NOT NULL,

    CONSTRAINT "detalle_imagen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "descuento" (
    "id" SERIAL NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_final" TIMESTAMP(3) NOT NULL,
    "porcentaje" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "descuento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "precio" (
    "id" SERIAL NOT NULL,
    "precio_compra" DOUBLE PRECISION NOT NULL,
    "precio_venta" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "precio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "precio_descuento" (
    "precioId" INTEGER NOT NULL,
    "descuentoId" INTEGER NOT NULL,

    CONSTRAINT "precio_descuento_pkey" PRIMARY KEY ("precioId","descuentoId")
);

-- CreateTable
CREATE TABLE "orden_compra" (
    "id" SERIAL NOT NULL,
    "fecha_compra" TIMESTAMP(3) NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "id_usuario_direccion" INTEGER NOT NULL,

    CONSTRAINT "orden_compra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orden_compra_detalle" (
    "orden_compra_id" INTEGER NOT NULL,
    "detalleId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "orden_compra_detalle_pkey" PRIMARY KEY ("orden_compra_id","detalleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioDireccion_usuario_id_direccion_id_key" ON "UsuarioDireccion"("usuario_id", "direccion_id");

-- CreateIndex
CREATE INDEX "Producto_categoriaId_idx" ON "Producto"("categoriaId");

-- CreateIndex
CREATE INDEX "Detalle_productoId_idx" ON "Detalle"("productoId");

-- CreateIndex
CREATE INDEX "Detalle_talleId_idx" ON "Detalle"("talleId");

-- CreateIndex
CREATE INDEX "Detalle_precioId_idx" ON "Detalle"("precioId");

-- AddForeignKey
ALTER TABLE "UsuarioDireccion" ADD CONSTRAINT "UsuarioDireccion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioDireccion" ADD CONSTRAINT "UsuarioDireccion_direccion_id_fkey" FOREIGN KEY ("direccion_id") REFERENCES "Direccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_talleId_fkey" FOREIGN KEY ("talleId") REFERENCES "talle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_precioId_fkey" FOREIGN KEY ("precioId") REFERENCES "precio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_imagen" ADD CONSTRAINT "detalle_imagen_detalleId_fkey" FOREIGN KEY ("detalleId") REFERENCES "Detalle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_imagen" ADD CONSTRAINT "detalle_imagen_imagenId_fkey" FOREIGN KEY ("imagenId") REFERENCES "imagen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "precio_descuento" ADD CONSTRAINT "precio_descuento_precioId_fkey" FOREIGN KEY ("precioId") REFERENCES "precio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "precio_descuento" ADD CONSTRAINT "precio_descuento_descuentoId_fkey" FOREIGN KEY ("descuentoId") REFERENCES "descuento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orden_compra" ADD CONSTRAINT "orden_compra_id_usuario_direccion_fkey" FOREIGN KEY ("id_usuario_direccion") REFERENCES "UsuarioDireccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orden_compra_detalle" ADD CONSTRAINT "orden_compra_detalle_orden_compra_id_fkey" FOREIGN KEY ("orden_compra_id") REFERENCES "orden_compra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orden_compra_detalle" ADD CONSTRAINT "orden_compra_detalle_detalleId_fkey" FOREIGN KEY ("detalleId") REFERENCES "Detalle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
