import app from './app';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

// Start server
const server = app.listen(PORT, () => {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║                                                          ║');
  console.log('║   🚀 CBT Authentication Server Running                  ║');
  console.log('║                                                          ║');
  console.log(`║   Port: ${PORT}                                           ║`);
  console.log(`║   Environment: ${process.env.NODE_ENV || 'development'}                               ║`);
  console.log('║                                                          ║');
  console.log('║   Available Routes:                                      ║');
  console.log('║   - POST /auth/register                                  ║');
  console.log('║   - POST /auth/login                                     ║');
  console.log('║   - GET  /auth/me                                        ║');
  console.log('║                                                          ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\nSIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
