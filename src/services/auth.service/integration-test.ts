// src/services/auth.service/integration-test.ts
import express from 'express';
import authRouter from './index';

const app = express();
app.use(express.json());
app.use('/auth', authRouter);

// Test server
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🚀 Test server running on http://localhost:${PORT}`);
  console.log('\n📋 Available endpoints:');
  console.log('  GET  http://localhost:3001/auth/health');
  console.log('  POST http://localhost:3001/auth/admin/register');
  console.log('  POST http://localhost:3001/auth/admin/login');
  console.log('  POST http://localhost:3001/auth/student/enter-exam');
  console.log('\n🔧 Use Thunder Client or Postman to test these endpoints.');
  console.log('💡 Press Ctrl+C to stop the server.');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down test server...');
  process.exit(0);
});