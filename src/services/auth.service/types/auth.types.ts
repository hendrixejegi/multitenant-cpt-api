// src/services/auth.service/types/auth.types.ts

// Admin user interface
export interface AdminUser {
  id: string;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  role: 'super_admin' | 'tenant_admin' | 'teacher';
  tenantId: string;  // Which organization they belong to
  isActive: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Student exam session interface
export interface StudentSession {
  id: string;
  studentIdentifier: string;  // Email or generated ID
  examId: string;            // Which exam they're taking
  tenantId: string;          // Which organization
  accessToken: string;       // Short-lived token (2-3 hours)
  examAccessCode: string;    // Code from teacher to enter exam
  expiresAt: Date;           // When session expires
  startedAt: Date;           // When exam started
  submittedAt?: Date;        // When submitted (if finished)
  ipAddress: string;         // For security logging
  userAgent: string;         // Browser/device info
  isActive: boolean;         // Is session still valid?
}

// Request/Response types
export interface RegisterAdminRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  organizationName: string;  // Will create new tenant
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ExamEntryRequest {
  examAccessCode: string;
  studentIdentifier: string;  // Email or name
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  note?: string;
}