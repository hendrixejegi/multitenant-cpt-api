// src/services/auth.service/utils/env.utils.ts

export const validateEnv = () => {
  const requiredEnvVars = [
    'JWT_SECRET',
    'PORT',
    'NODE_ENV'
  ];

  const missingVars: string[] = [];

  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      missingVars.push(varName);
    }
  });

  if (missingVars.length > 0) {
    // In development, just warn instead of throwing
    if (process.env.NODE_ENV === 'production') {
      throw new Error(
        `Missing required environment variables: ${missingVars.join(', ')}`
      );
    } else {
      console.warn(`⚠️  Missing environment variables: ${missingVars.join(', ')}`);
      console.warn('   Using default values for development');
      
      // Set defaults for development
      if (!process.env.JWT_SECRET) {
        process.env.JWT_SECRET = 'dev-secret-key-minimum-32-chars-for-development-only';
      }
      if (!process.env.PORT) {
        process.env.PORT = '3000';
      }
      if (!process.env.NODE_ENV) {
        process.env.NODE_ENV = 'development';
      }
    }
  }

  // Validate JWT secret length
  if (process.env.JWT_SECRET && process.env.JWT_SECRET.length < 32) {
    console.warn('⚠️  Warning: JWT_SECRET is less than 32 characters. Consider using a longer secret for production.');
  }

  console.log('✅ Environment variables validated');
  return true;
};