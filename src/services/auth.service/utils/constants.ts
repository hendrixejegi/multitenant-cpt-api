// src/services/auth.service/utils/constants.ts

export const JWT_CONFIG = {
  ADMIN_EXPIRY: '7d',      // 7 days for admin tokens
  STUDENT_EXPIRY: '2h',    // 2 hours for student exam tokens
  SECRET_MIN_LENGTH: 32,
};

export const PASSWORD_CONFIG = {
  SALT_ROUNDS: 12,         // For bcrypt hashing
  MIN_LENGTH: 8,
  MAX_LENGTH: 100,
};

export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Please provide a valid email address',
  INVALID_PASSWORD: 'Password does not meet requirements',
  USER_EXISTS: 'User with this email already exists',
  USER_NOT_FOUND: 'User not found',
  INVALID_CREDENTIALS: 'Invalid email or password',
  UNAUTHORIZED: 'Unauthorized access',
  TENANT_REQUIRED: 'Tenant context is required',
};