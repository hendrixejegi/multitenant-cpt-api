import config from './config/config';
import express, { type Request, type Response } from 'express';
import errorHandler from './middlewares/error.middleware';
import initializePassport from './config/passport';
import passport from 'passport';
import type { ApiResponse } from './types/api';
import { prisma } from './utils/prisma';
import router from './router';
import swaggerUi from 'swagger-ui-express';
import { swaggerApiOptions } from './config/swagger';

initializePassport(passport);

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.get('/api/health', (req: Request, res: Response<ApiResponse>) => {
  res.status(200).json({ type: 'success', message: 'Server is healthy' });
});
app.use('/api', router);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerApiOptions));

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`server listening on port ${config.port}`);
});

// Graceful shutdown handlers
const gracefulShutdown = async (signal: string) => {
  console.log(`\nReceived ${signal}. Closing Prisma connection...`);
  await prisma.$disconnect();
  console.log('Prisma connection closed.');
  process.exit(0);
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
