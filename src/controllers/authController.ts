import { Request, Response } from 'express';
import { prisma } from '../models';
import bcrypt from 'bcrypt';
import { generarToken } from '../utils/jwt';

//Registo del usuario
export const register = async (req: Request, res: Response): Promise<void> => {
    const { nombre, email, contrasena, dni, rol } = req.body;
    try {
        //Validar que el email no exista
        const usuarioExistente = await prisma.usuario.findUnique({ where: { email } });
        if (usuarioExistente) {
            res.status(400).json({ message: 'El correo ya está registrado' });
        }

        //Hashear la contraseña.
        const hash = await bcrypt.hash(contrasena, 24);

        //Crear el usuario.
        const nuevoUsuario = await prisma.usuario.create({
            data: {
                nombre,
                email,
                contrasena: hash,
                dni,
                rol,
            }
        })

        //Genera un token JWT
        const token = generarToken({ id: nuevoUsuario.id, rol: nuevoUsuario.rol });

        //Retornar un token JWT válido.
        res.status(201).json({ token });
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

//Login del usuario
export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, contrasena } = req.body;

    try {
        //Busca el usuario por email en la base de datos.
        const usuario = await prisma.usuario.findUnique({ where: { email } })

        if(!usuario ){
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
        
        //Validamos la contraseña comparando la ingresada con la almacenada (hasheada) usando bcrypt.compare().
        if (!(await bcrypt.compare(contrasena, usuario.contrasena))) {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }

        //generamos un token JWT.
        const token = generarToken({ id: usuario.id, rol: usuario.rol });

        res.json({ token });
    } catch (error) {
        console.error('Error en el login:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};