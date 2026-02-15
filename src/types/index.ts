import { Request } from 'express';

// Database Models
export interface Tenant {
  id: string;
  organization_name: string;
  subdomain: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface User {
  id: string;
  tenant_id: string;
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  role: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

// JWT Payload
export interface JwtPayload {
  user_id: string;
  tenant_id: string;
  role: string;
  email: string;
}

// Request DTOs
export interface RegisterDto {
  organization_name: string;
  subdomain: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

// Response DTOs
export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: UserResponse;
  };
}

export interface UserResponse {
  id: string;
  tenant_id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  status: string;
  organization_name: string;
}

// Extended Express Request with authenticated user
export interface AuthRequest extends Request {
  user?: JwtPayload;
}

// API Response wrapper
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
