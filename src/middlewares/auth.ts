import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
const JWT_SECRET = "FG-ecommerce";

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; //NEcesito la segunda parte despues del espacio
    if (!token) {
        res.status(401).json({ error: 'No autorizado' });
        return 
    }

    Jwt.verify(token, JWT_SECRET, (err, decoded) => { 

        if(err){
            console.log('Error en la autenticacion: ', err)
            res.status(403).json({ error: 'No tiene acceso a este recurso' });
            return 
        }

        next();
    })
}