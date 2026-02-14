import config from './config/config';
import express, { type Request, type Response } from 'express';
import errorHandler from './middlewares/error.middleware';
import initializePassport from './config/passport';
import passport from 'passport';
import type { ApiResponse } from './types/api';

initializePassport(passport);

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.get('/health', (req: Request, res: Response<ApiResponse>) => {
  res.status(200).json({ type: 'success', message: 'Server is healthy' });
});

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`server listening on port ${config.port}`);
});
