import express from 'express';
import authRouter from "./routes/authRoutes";
import dotenv from "dotenv";
import talleRouter from './routes/talle.routes';
import imagenRouter from './routes/imagen.routes';
import categoriasRouter from './routes/categoria.routes';
import descuentoRouter from './routes/descuento.routes';
import direccionRouter from './routes/direccion.routes';
import usuarioRouter from './routes/usuario.routes';

dotenv.config();
const app = express();

app.use(express.json());

//Rutas
app.use("/api/talle", talleRouter);
app.use("/api/imagene", imagenRouter);
app.use("/api/categoria", categoriasRouter);
app.use("/api/descuento", descuentoRouter);
app.use("/api/direccion", direccionRouter);


//apirest de usuarios
app.use('/api/auth', authRouter);
app.use("/api/usuario", usuarioRouter);

export default app;