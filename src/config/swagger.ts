import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Multi-tenant CBT API',
      version: '1.0.0',
    },
    servers: [{ url: 'https://multitenant-cpt-api.onrender.com/api' }],
  },
  apis: ['../router/*.ts', '../controllers/*ts'],
};

const swaggerApiOptions = swaggerJSDoc(options);

export { swaggerApiOptions };
