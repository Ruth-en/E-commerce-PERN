import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
    // Limpia todas las tablas en orden de dependencia inversa
    await prisma.ordenCompraDetalle.deleteMany();
    await prisma.ordenCompra.deleteMany();
    await prisma.usuarioDireccion.deleteMany();
    await prisma.direccion.deleteMany();
    await prisma.usuario.deleteMany();
    await prisma.detalleImagen.deleteMany();
    await prisma.imagen.deleteMany();
    await prisma.detalle.deleteMany();
    await prisma.talle.deleteMany();
    await prisma.precioDescuento.deleteMany();
    await prisma.descuento.deleteMany();
    await prisma.producto.deleteMany();
    await prisma.categoria.deleteMany();
    await prisma.precio.deleteMany();

    // ────────────────────────────────────────────
    // Insertar Usuarios
    // ────────────────────────────────────────────


    const hashed123 = await bcrypt.hash('123', 10);
    const hashedAdmin = await bcrypt.hash('admin', 10);
    const hashedAbc = await bcrypt.hash('abc', 10);
    const hashedXyz = await bcrypt.hash('xyz', 10);

    const usuarios = await Promise.all([
        prisma.usuario.create({ data: { id: 1, nombre: 'Ana', email: 'ana@mail.com', contrasena: hashed123, dni: '12345678', rol: 'CLIENTE' } }),
        prisma.usuario.create({ data: { id: 2, nombre: 'Luis', email: 'luis@mail.com', contrasena: hashed123, dni: '23456789', rol: 'CLIENTE' } }),
        prisma.usuario.create({ data: { id: 3, nombre: 'Admin', email: 'admin@mail.com', contrasena: hashedAdmin, dni: '00000000', rol: 'ADMIN' } }),
        prisma.usuario.create({ data: { id: 4, nombre: 'Marta', email: 'marta@mail.com', contrasena: hashedAbc, dni: '34567890', rol: 'CLIENTE' } }),
        prisma.usuario.create({ data: { id: 5, nombre: 'Pedro', email: 'pedro@mail.com', contrasena: hashedXyz, dni: '45678901', rol: 'CLIENTE' } }),
    ]);


    // ────────────────────────────────────────────
    // Insertar Direcciones
    // ────────────────────────────────────────────
    const direcciones = await Promise.all([
        prisma.direccion.create({ data: { id: 1, pais: 'Argentina', provincia: 'Buenos Aires', departamento: 'La Matanza', localidad: 'San Justo' } }),
        prisma.direccion.create({ data: { id: 2, pais: 'Argentina', provincia: 'Córdoba', departamento: 'Capital', localidad: 'Córdoba' } }),
        prisma.direccion.create({ data: { id: 3, pais: 'Argentina', provincia: 'Mendoza', departamento: 'Capital', localidad: 'Mendoza' } }),
        prisma.direccion.create({ data: { id: 4, pais: 'Argentina', provincia: 'Santa Fe', departamento: 'Rosario', localidad: 'Rosario' } }),
        prisma.direccion.create({ data: { id: 5, pais: 'Argentina', provincia: 'Salta', departamento: 'Capital', localidad: 'Salta' } }),
    ]);

    // ────────────────────────────────────────────
    // Asociar Usuarios con Direcciones
    // ────────────────────────────────────────────
    await Promise.all(
        usuarios.map((u, i) => prisma.usuarioDireccion.create({
            data: {
                usuarioId: u.id,
                direccionId: direcciones[i].id,
            },
        }))
    );

    // ────────────────────────────────────────────
    // Categorías
    // ────────────────────────────────────────────
    const categorias = await Promise.all([
        prisma.categoria.create({ data: { id: 1, nombre: 'Running' } }),
        prisma.categoria.create({ data: { id: 2, nombre: 'Casual' } }),
        prisma.categoria.create({ data: { id: 3, nombre: 'Trail' } }),
        prisma.categoria.create({ data: { id: 4, nombre: 'Urbano' } }),
        prisma.categoria.create({ data: { id: 5, nombre: 'Formal' } }),
    ]);

    // ────────────────────────────────────────────
    // Productos
    // ────────────────────────────────────────────
    const productos = await Promise.all([
        prisma.producto.create({ data: { id: 1, nombre: 'Zapatilla Air Max', sexo: 'Hombre', tipoProducto: 1, categoriaId: 1 } }),
        prisma.producto.create({ data: { id: 2, nombre: 'Zapatilla ZoomX', sexo: 'Mujer', tipoProducto: 1, categoriaId: 2 } }),
        prisma.producto.create({ data: { id: 3, nombre: 'Botín Trail', sexo: 'Unisex', tipoProducto: 2, categoriaId: 3 } }),
        prisma.producto.create({ data: { id: 4, nombre: 'Zapato Clásico', sexo: 'Hombre', tipoProducto: 3, categoriaId: 5 } }),
        prisma.producto.create({ data: { id: 5, nombre: 'Sandalia Urbana', sexo: 'Mujer', tipoProducto: 2, categoriaId: 4 } }),
    ]);

    // ────────────────────────────────────────────
    // Talles
    // ────────────────────────────────────────────
    await prisma.talle.createMany({
        data: [
            { id: 1, numero: '36' },
            { id: 2, numero: '37' },
            { id: 3, numero: '38' },
            { id: 4, numero: '39' },
            { id: 5, numero: '40' },
        ],
    });

    // ────────────────────────────────────────────
    // Precios
    // ────────────────────────────────────────────
    await prisma.precio.createMany({
        data: [
            { id: 1, precioCompra: 50000, precioVenta: 70000 },
            { id: 2, precioCompra: 60000, precioVenta: 80000 },
            { id: 3, precioCompra: 55000, precioVenta: 75000 },
            { id: 4, precioCompra: 52000, precioVenta: 72000 },
            { id: 5, precioCompra: 58000, precioVenta: 77000 },
        ],
    });

    // ────────────────────────────────────────────
    // Descuentos
    // ────────────────────────────────────────────
    await prisma.descuento.createMany({
        data: [
            { id: 1, fechaInicio: new Date(), fechaFinal: new Date('2025-12-31'), porcentaje: 10 },
            { id: 2, fechaInicio: new Date(), fechaFinal: new Date('2025-11-30'), porcentaje: 15 },
            { id: 3, fechaInicio: new Date(), fechaFinal: new Date('2025-10-15'), porcentaje: 20 },
            { id: 4, fechaInicio: new Date(), fechaFinal: new Date('2025-09-01'), porcentaje: 25 },
            { id: 5, fechaInicio: new Date(), fechaFinal: new Date('2025-08-01'), porcentaje: 30 },
        ],
    });

    // ────────────────────────────────────────────
    // Precios con Descuento
    // ────────────────────────────────────────────
    await prisma.precioDescuento.createMany({
        data: [
            { precioId: 1, descuentoId: 2 },
            { precioId: 2, descuentoId: 1 },
            { precioId: 3, descuentoId: 5 },
            { precioId: 4, descuentoId: 4 },
            { precioId: 5, descuentoId: 3 },
        ],
    });

    // ────────────────────────────────────────────
    // Detalles
    // ────────────────────────────────────────────
    await prisma.detalle.createMany({
        data: [
            { id: 1, color: 'Rojo', marca: 'Nike', stock: 10, estado: true, productoId: 1, talleId: 1, precioId: 1 },
            { id: 2, color: 'Azul', marca: 'Adidas', stock: 5, estado: true, productoId: 2, talleId: 2, precioId: 2 },
            { id: 3, color: 'Negro', marca: 'Puma', stock: 8, estado: true, productoId: 3, talleId: 3, precioId: 3 },
            { id: 4, color: 'Gris', marca: 'Reebok', stock: 3, estado: false, productoId: 4, talleId: 4, precioId: 4 },
            { id: 5, color: 'Blanco', marca: 'Fila', stock: 6, estado: true, productoId: 5, talleId: 5, precioId: 5 },
        ],
    });

    // ────────────────────────────────────────────
    // Imágenes
    // ────────────────────────────────────────────
    await prisma.imagen.createMany({
        data: [
            { id: 1, url: 'https://example.com/img1.jpg' },
            { id: 2, url: 'https://example.com/img2.jpg' },
            { id: 3, url: 'https://example.com/img3.jpg' },
            { id: 4, url: 'https://example.com/img4.jpg' },
            { id: 5, url: 'https://example.com/img5.jpg' },
        ],
    });

    await prisma.detalleImagen.createMany({
        data: [
            { detalleId: 1, imagenId: 1 },
            { detalleId: 2, imagenId: 2 },
            { detalleId: 3, imagenId: 3 },
            { detalleId: 4, imagenId: 4 },
            { detalleId: 5, imagenId: 5 },
        ],
    });

    console.log('✔ Seed ejecutado correctamente.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });
