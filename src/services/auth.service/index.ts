// src/services/auth.service/index.ts
// Main entry point for Authentication Service

import { Router } from 'express';
import adminRoutes from './routes/admin.auth.routes';
import studentRoutes from './routes/student.auth.routes';
import { validateEnv } from './utils/env.utils';

// Validate environment variables on startup
try {
  validateEnv();
  console.log('✅ Authentication Service: Environment validated');
} catch (error) {
  console.error('❌ Authentication Service: Environment validation failed:', error);
  // Don't exit in development, just warn
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
}

const router = Router();

// Service health check
router.get('/health', (req, res) => {
  res.json({ 
    service: 'Authentication Service',
    status: 'running',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    features: {
      adminAuth: true,
      studentExamAuth: true,
      jwtTokens: true,
      passwordHashing: true,
    }
  });
});

// Mount route groups
router.use('/admin', adminRoutes);
router.use('/student', studentRoutes);

// 404 handler for auth service routes
router.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Authentication route not found',
    availableRoutes: [
      'GET /health',
      'POST /admin/register',
      'POST /admin/login',
      'GET /admin/me (protected)',
      'POST /admin/logout (protected)',
      'POST /student/enter-exam',
      'POST /student/validate-token',
      'POST /student/end-exam (protected)',
    ]
  });
});

console.log('✅ Authentication Service routes loaded');
export default router;