import express from "express";
import authRouter from "./routes/authRoutes";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

//Rutas
app.use('/api/auth', authRouter);

//apirest de usuarios

export default app;