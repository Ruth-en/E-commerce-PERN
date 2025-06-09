import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'FG-ecommerce';

export interface AuthRequest extends Request {
    user?: {
        id: number
        email: string
        rol: string
    }
}

export const authenticateToken = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; //NEcesito la segunda parte despues del espacio
    if (!token) {
        res.status(401).json({ error: 'No autorizado: token faltante' });
        return
    }

    Jwt.verify(token, JWT_SECRET, (err, decoded) => {

        if (err) {
            console.log('Error en la autenticacion: ', err)
            res.status(403).json({ error: 'No tiene acceso a este recurso' });
            return
        }
        const { id, rol } = decoded as { id: number; rol: string };

        req.user = { id, rol, email: '' };
        next();
    })
}

export const authorizeRoles = (...allowedRoles: string[]) => {
    //obtiene header authorization
    return (req: AuthRequest, res: Response, next: NextFunction): void => {
        if (!req.user) {
            res.status(401).json({ message: "No autenticado" })
            return
        }

        //aca verifica el tipo de usuario
        if (!allowedRoles.includes(req.user.rol)) {
            res.status(403).json({ message: "No autorizado" })
            return
        }

        next()
    }
}