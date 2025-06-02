import { PrismaClient } from '../src/generated/prisma';
const prisma = new PrismaClient()

async function main() {
    // Rol es un enum, lo usamos en usuarios
    await prisma.usuario.createMany({
        data: [
            { nombre: 'Ana', email: 'ana@mail.com', contrasena: '123', dni: '12345678', rol: 'CLIENTE' },
            { nombre: 'Luis', email: 'luis@mail.com', contrasena: '123', dni: '23456789', rol: 'CLIENTE' },
            { nombre: 'Admin', email: 'admin@mail.com', contrasena: 'admin', dni: '00000000', rol: 'ADMIN' },
            { nombre: 'Marta', email: 'marta@mail.com', contrasena: 'abc', dni: '34567890', rol: 'CLIENTE' },
            { nombre: 'Pedro', email: 'pedro@mail.com', contrasena: 'xyz', dni: '45678901', rol: 'CLIENTE' },
        ],
    })

    await prisma.direccion.createMany({
        data: [
            { pais: 'Argentina', provincia: 'Buenos Aires', departamento: 'La Matanza', localidad: 'San Justo' },
            { pais: 'Argentina', provincia: 'Córdoba', departamento: 'Capital', localidad: 'Córdoba' },
            { pais: 'Argentina', provincia: 'Mendoza', departamento: 'Capital', localidad: 'Mendoza' },
            { pais: 'Argentina', provincia: 'Santa Fe', departamento: 'Rosario', localidad: 'Rosario' },
            { pais: 'Argentina', provincia: 'Salta', departamento: 'Capital', localidad: 'Salta' },
        ],
    })

    await prisma.usuarioDireccion.createMany({
        data: [
            { usuarioId: 1, direccionId: 1 },
            { usuarioId: 2, direccionId: 2 },
            { usuarioId: 3, direccionId: 3 },
            { usuarioId: 4, direccionId: 4 },
            { usuarioId: 5, direccionId: 5 },
        ],
    })

    await prisma.categoria.createMany({
        data: [
            { nombre: 'Running' },
            { nombre: 'Casual' },
            { nombre: 'Trail' },
            { nombre: 'Urbano' },
            { nombre: 'Formal' },
        ],
    })

    await prisma.producto.createMany({
        data: [
            { nombre: 'Zapatilla Air Max', sexo: 'Hombre', tipoProducto: 1, categoriaId: 1 },
            { nombre: 'Zapatilla ZoomX', sexo: 'Mujer', tipoProducto: 1, categoriaId: 2 },
            { nombre: 'Botín Trail', sexo: 'Unisex', tipoProducto: 2, categoriaId: 3 },
            { nombre: 'Zapato Clásico', sexo: 'Hombre', tipoProducto: 3, categoriaId: 5 },
            { nombre: 'Sandalia Urbana', sexo: 'Mujer', tipoProducto: 2, categoriaId: 4 },
        ],
    })

    await prisma.talle.createMany({
        data: [
            { numero: '36' },
            { numero: '37' },
            { numero: '38' },
            { numero: '39' },
            { numero: '40' },
        ],
    })

    await prisma.precio.createMany({
        data: [
            { precioCompra: 50000, precioVenta: 70000 },
            { precioCompra: 60000, precioVenta: 80000 },
            { precioCompra: 55000, precioVenta: 75000 },
            { precioCompra: 52000, precioVenta: 72000 },
            { precioCompra: 58000, precioVenta: 77000 },
        ],
    })

    await prisma.descuento.createMany({
        data: [
            { fechaInicio: new Date(), fechaFinal: new Date('2025-12-31'), porcentaje: 10 },
            { fechaInicio: new Date(), fechaFinal: new Date('2025-11-30'), porcentaje: 15 },
            { fechaInicio: new Date(), fechaFinal: new Date('2025-10-15'), porcentaje: 20 },
            { fechaInicio: new Date(), fechaFinal: new Date('2025-09-01'), porcentaje: 25 },
            { fechaInicio: new Date(), fechaFinal: new Date('2025-08-01'), porcentaje: 30 },
        ],
    })

    await prisma.precioDescuento.createMany({
        data: [
            { precioId: 1, descuentoId: 1 },
            { precioId: 2, descuentoId: 2 },
            { precioId: 3, descuentoId: 3 },
            { precioId: 4, descuentoId: 4 },
            { precioId: 5, descuentoId: 5 },
        ],
    })

    await prisma.detalle.createMany({
        data: [
            { color: 'Rojo', marca: 'Nike', stock: 10, estado: true, productoId: 1, talleId: 1, precioId: 1 },
            { color: 'Azul', marca: 'Adidas', stock: 5, estado: true, productoId: 2, talleId: 2, precioId: 2 },
            { color: 'Negro', marca: 'Puma', stock: 8, estado: true, productoId: 3, talleId: 3, precioId: 3 },
            { color: 'Gris', marca: 'Reebok', stock: 3, estado: false, productoId: 4, talleId: 4, precioId: 4 },
            { color: 'Blanco', marca: 'Fila', stock: 6, estado: true, productoId: 5, talleId: 5, precioId: 5 },
        ],
    })

    await prisma.imagen.createMany({
        data: [
            { url: 'https://example.com/img1.jpg' },
            { url: 'https://example.com/img2.jpg' },
            { url: 'https://example.com/img3.jpg' },
            { url: 'https://example.com/img4.jpg' },
            { url: 'https://example.com/img5.jpg' },
        ],
    })

    await prisma.detalleImagen.createMany({
        data: [
            { detalleId: 1, imagenId: 1 },
            { detalleId: 2, imagenId: 2 },
            { detalleId: 3, imagenId: 3 },
            { detalleId: 4, imagenId: 4 },
            { detalleId: 5, imagenId: 5 },
        ],
    })

    await prisma.ordenCompra.createMany({
        data: [
            { fechaCompra: new Date(), total: 70000, usuarioDireccionId: 1 },
            { fechaCompra: new Date(), total: 80000, usuarioDireccionId: 2 },
            { fechaCompra: new Date(), total: 75000, usuarioDireccionId: 3 },
            { fechaCompra: new Date(), total: 72000, usuarioDireccionId: 4 },
            { fechaCompra: new Date(), total: 77000, usuarioDireccionId: 5 },
        ],
    })

    await prisma.ordenCompraDetalle.createMany({
        data: [
            { ordenCompraId: 1, detalleId: 1 },
            { ordenCompraId: 2, detalleId: 2 },
            { ordenCompraId: 3, detalleId: 3 },
            { ordenCompraId: 4, detalleId: 4 },
            { ordenCompraId: 5, detalleId: 5 },
        ],
    })
    console.log('✅ Datos insertados correctamente.')
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => prisma.$disconnect())
