// src/services/auth.service/services/jwt.service.ts
import jwt from 'jsonwebtoken';
//import * as jwt from 'jsonwebtoken';
import { JWT_CONFIG } from '../utils/constants';

export interface JwtPayload {
  userId: string;
  email: string;
  role: string;
  tenantId: string;
  type: 'admin' | 'student_exam';
  iat?: number;
  exp?: number;
}

export class JwtService {
  private static readonly SECRET = process.env.JWT_SECRET || 'your-fallback-secret-key-change-in-production-min-32-chars';

  /**
   * Generate a JWT token
   */
 static generateToken(payload: JwtPayload, expiresIn: string = JWT_CONFIG.ADMIN_EXPIRY): string {
  if (this.SECRET.length < JWT_CONFIG.SECRET_MIN_LENGTH) {
    throw new Error(`JWT secret must be at least ${JWT_CONFIG.SECRET_MIN_LENGTH} characters`);
  }

  // Use type assertion if needed
  return (jwt as any).sign(payload, this.SECRET, { expiresIn });
}
  /**
   * Verify a JWT token
   */
  static verifyToken(token: string): JwtPayload {
    try {
      const decoded = jwt.verify(token, this.SECRET);
      return decoded as JwtPayload;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('expired')) {
          throw new Error('Token has expired');
        }
        if (error.message.includes('invalid')) {
          throw new Error('Invalid token');
        }
      }
      throw new Error('Token verification failed');
    }
  }

  /**
   * Decode token without verification (for inspection)
   */
  static decodeToken(token: string): JwtPayload | null {
    try {
      const decoded = jwt.decode(token);
      return decoded as JwtPayload;
    } catch {
      return null;
    }
  }

  /**
   * Generate admin token (7 days expiry)
   */
  static generateAdminToken(userId: string, email: string, role: string, tenantId: string): string {
    const payload: JwtPayload = {
      userId,
      email,
      role,
      tenantId,
      type: 'admin',
    };
    return this.generateToken(payload, JWT_CONFIG.ADMIN_EXPIRY);
  }

  /**
   * Generate student exam token (2 hours expiry)
   */
  static generateStudentToken(
    sessionId: string,
    studentIdentifier: string,
    examId: string,
    tenantId: string
  ): string {
    const payload: JwtPayload = {
      userId: sessionId,
      email: studentIdentifier,
      role: 'student',
      tenantId,
      type: 'student_exam',
    };
    return this.generateToken(payload, JWT_CONFIG.STUDENT_EXPIRY);
  }
}