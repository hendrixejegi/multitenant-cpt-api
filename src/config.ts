import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  mongoUri: string;
  jwtSecret: string;
  jwtExpire: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 8000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri:
    process.env.MONGODB_URI || 'mongodb://localhost:27017/multitenant-cpt',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
  jwtExpire: process.env.JWT_EXPIRE || '7d',
};

export default config;
