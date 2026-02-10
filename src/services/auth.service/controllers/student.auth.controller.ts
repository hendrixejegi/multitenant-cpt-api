// src/services/auth.service/controllers/student.auth.controller.ts
import { Request, Response } from 'express';
import { JwtService } from '../services/jwt.service';
import { ExamEntryRequest, ApiResponse } from '../types/auth.types';

// Temporary storage for student sessions (will use database later)
const temporaryStudentSessions: any[] = [];

export const enterExam = async (req: Request, res: Response) => {
  try {
    const data: ExamEntryRequest = req.body;

    // Validate input
    if (!data.examAccessCode || !data.studentIdentifier) {
      const response: ApiResponse = {
        success: false,
        message: 'Exam access code and student identifier are required',
      };
      return res.status(400).json(response);
    }

    // Mock exam validation (will integrate with Exam Service later)
    // For now, accept any 8-character code starting with "EXAM"
    if (!data.examAccessCode.startsWith('EXAM') || data.examAccessCode.length !== 8) {
      const response: ApiResponse = {
        success: false,
        message: 'Invalid exam access code format',
        note: 'Expected format: EXAM followed by 4 digits (e.g., EXAM1234)',
      };
      return res.status(400).json(response);
    }

    // Extract exam ID from access code (mock - will come from Exam Service)
    const mockExamId = `exam_${data.examAccessCode.substring(4)}`;
    const mockTenantId = `tenant_school_${data.examAccessCode.substring(4, 6)}`;

    // Check if student already has an active session for this exam
    const existingSession = temporaryStudentSessions.find(
      session => 
        session.studentIdentifier === data.studentIdentifier && 
        session.examId === mockExamId &&
        session.isActive &&
        new Date(session.expiresAt) > new Date()
    );

    let studentSession;
    
    if (existingSession) {
      // Reuse existing session
      studentSession = existingSession;
      console.log(`📝 Reusing existing session for student: ${data.studentIdentifier}`);
    } else {
      // Create new session
      const sessionId = `session_${Date.now()}`;
      const token = JwtService.generateStudentToken(
        sessionId,
        data.studentIdentifier,
        mockExamId,
        mockTenantId
      );

      // Calculate expiration (2 hours from now)
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 2);

      studentSession = {
        id: sessionId,
        studentIdentifier: data.studentIdentifier,
        examId: mockExamId,
        tenantId: mockTenantId,
        accessToken: token,
        examAccessCode: data.examAccessCode,
        expiresAt,
        startedAt: new Date(),
        ipAddress: req.ip || 'unknown',
        userAgent: req.headers['user-agent'] || 'unknown',
        isActive: true,
      };

      temporaryStudentSessions.push(studentSession);
      console.log(`🎯 Created new session for student: ${data.studentIdentifier}`);
    }

    // Prepare response
    const response: ApiResponse = {
      success: true,
      message: 'Exam entry successful',
      data: {
        sessionId: studentSession.id,
        token: studentSession.accessToken,
        examId: studentSession.examId,
        studentIdentifier: studentSession.studentIdentifier,
        expiresAt: studentSession.expiresAt,
        timeRemaining: Math.floor(
          (new Date(studentSession.expiresAt).getTime() - Date.now()) / 1000 / 60
        ) + ' minutes',
      },
      note: 'In production, token should be stored in httpOnly cookie',
    };

    res.status(200).json(response);
  } catch (error) {
    const err = error as Error;
    console.error('Exam entry error:', err);
    
    const response: ApiResponse = {
      success: false,
      message: 'Failed to enter exam',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    };
    res.status(500).json(response);
  }
};

export const validateStudentToken = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    if (!token) {
      const response: ApiResponse = {
        success: false,
        message: 'Token is required',
      };
      return res.status(400).json(response);
    }

    // Verify token
    const decoded = JwtService.verifyToken(token);

    // Find session
    const session = temporaryStudentSessions.find(
      s => s.id === decoded.userId && s.isActive
    );

    if (!session) {
      const response: ApiResponse = {
        success: false,
        message: 'Session not found or expired',
      };
      return res.status(404).json(response);
    }

    // Check if session is expired
    if (new Date(session.expiresAt) <= new Date()) {
      session.isActive = false;
      const response: ApiResponse = {
        success: false,
        message: 'Session has expired',
      };
      return res.status(401).json(response);
    }

    const response: ApiResponse = {
      success: true,
      message: 'Token is valid',
      data: {
        isValid: true,
        session: {
          id: session.id,
          studentIdentifier: session.studentIdentifier,
          examId: session.examId,
          expiresAt: session.expiresAt,
          timeRemaining: Math.floor(
            (new Date(session.expiresAt).getTime() - Date.now()) / 1000 / 60
          ) + ' minutes',
        },
      },
    };

    res.status(200).json(response);
  } catch (error) {
    const err = error as Error;
    
    const response: ApiResponse = {
      success: false,
      message: 'Token validation failed',
      error: err.message.includes('expired') ? 'Token has expired' : 'Invalid token',
    };
    res.status(401).json(response);
  }
};

export const endExam = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.body;

    if (!sessionId) {
      const response: ApiResponse = {
        success: false,
        message: 'Session ID is required',
      };
      return res.status(400).json(response);
    }

    // Find and end session
    const sessionIndex = temporaryStudentSessions.findIndex(
      s => s.id === sessionId
    );

    if (sessionIndex === -1) {
      const response: ApiResponse = {
        success: false,
        message: 'Session not found',
      };
      return res.status(404).json(response);
    }

    temporaryStudentSessions[sessionIndex].isActive = false;
    temporaryStudentSessions[sessionIndex].submittedAt = new Date();

    const response: ApiResponse = {
      success: true,
      message: 'Exam session ended successfully',
      data: {
        sessionId,
        submittedAt: new Date().toISOString(),
      },
    };

    res.status(200).json(response);
  } catch (error) {
    const err = error as Error;
    console.error('End exam error:', err);
    
    const response: ApiResponse = {
      success: false,
      message: 'Failed to end exam session',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    };
    res.status(500).json(response);
  }
};