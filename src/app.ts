import express from 'express';
import authRouter from "./routes/authRoutes";
import dotenv from "dotenv";
import talleRouter from './routes/talle.routes';
import imagenRouter from './routes/imagen.routes';
import categoriasRouter from './routes/categoria.routes';
import descuentoRouter from './routes/descuento.routes';
import direccionRouter from './routes/direccion.routes';
import usuarioRouter from './routes/usuario.routes';
import precioRouter from './routes/precio.routes';
import precioDescRouter from './routes/precioDescuento.routes';
import productoRouter from './routes/producto.routes';
import usuarioDirecRouter from './routes/usuarioDireccion.routes';
import ordenCompraRouter from './routes/ordenCompra.routes';
import detalleProdRouter from './routes/detalleProd.routes';
import detalleImagenRouter from './routes/detalleImagen.routes';
import ordenDetalleRouter from './routes/ordenCompraDetalle.routes';

dotenv.config();
const app = express();

app.use(express.json());

//Rutas
app.use("/api/talle", talleRouter); //
app.use("/api/imagen", imagenRouter); //
app.use("/api/categoria", categoriasRouter); //
app.use("/api/descuento", descuentoRouter); //
app.use("/api/direccion", direccionRouter); //
app.use("/api/precio", precioRouter); //
app.use("/api", precioDescRouter); //
app.use("/api/producto", productoRouter); //
app.use("/api/usuario-direcciones", usuarioDirecRouter); //
app.use("/api/ordenes", ordenCompraRouter); //
app.use("/api/detalles-productos", detalleProdRouter);//
app.use("/api/detalle-imagen", detalleImagenRouter); // Falta put
app.use("/api/orden-detalle", ordenDetalleRouter); // VER


//apirest de usuarios
app.use('/api/auth', authRouter); //
app.use('/api/usuario', usuarioRouter); //


export default app;