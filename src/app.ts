import config from './config';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import errorHandler from './middlewares/error-handler';
import { AppError } from './utils/error';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import courseRoutes from './routes/course';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.status(200).send(`<h1>Welcome to Multitenant CBT API</h1>`);
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

// Error handler
app.use(errorHandler);

// MongoDB Connection
mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.listen(config.port, () => {
  console.log(`server listening on port ${config.port}`);
});
