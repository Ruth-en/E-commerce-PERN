import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secreto_super_seguro';
const EXPIRES_IN = '1h';

export function generarToken(payload: object): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: EXPIRES_IN });
}

export function verificarToken(token: string) {
    return jwt.verify(token, JWT_SECRET);
}
