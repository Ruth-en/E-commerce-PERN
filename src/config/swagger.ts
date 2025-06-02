// src/config/swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';
import { Options } from 'swagger-jsdoc';

const options: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mi API REST',
            version: '1.0.0',
            description: 'Documentación de la API con Swagger y TypeScript',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Cambiar si usás otro puerto
            },
        ],
        paths: {},
    },
    apis: ['./src/routes/*.ts'], // Ruta donde están tus endpoints
};

export const swaggerSpec = swaggerJSDoc(options);
