// src/middlewares/auth.middleware.ts

/**
 * Authentication Middleware
 * 
 * This middleware protects routes that require a valid student token.
 * It runs BEFORE the controller function and verifies that:
 * 1. The request has an Authorization header
 * 2. The header contains a valid JWT token
 * 3. The token hasn't expired
 * 4. The token belongs to a student (not admin)
 * 
 * If all checks pass, it attaches the student info to req.student
 * If any check fails, it sends an error response and stops the request
 */

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define our student token payload
// * Interface defining what data we expect in the JWT token
//  * This matches what we put in the token when starting an exam

export interface StudentTokenPayload {
    userId: string;  // The student's ID
    attemptId: string;   // The current exam attempt ID
    role: 'student';  // literal type 'student'
}

// Extend Express Request to include student info as a separate property
declare global {
    namespace Express {
        interface Request {
            student?: StudentTokenPayload;  // Will be set if token is valid
        }
    }
}

/**
 * Middleware function to validate student tokens
 * 
 * How it works:
 * 1. Extract token from Authorization header (format: "Bearer <token>")
 * 2. Verify the token using JWT_SECRET
 * 3. Check if the role is 'student'
 * 4. If valid, attach payload to request and call next()
 * 5. If invalid, send error response
 */

export const validateStudentToken = (
    req: Request, 
    res: Response, 
    next: NextFunction
): void => {
    try {
        // Step 1: Get the Authorization header
        const authHeader = req.headers.authorization;
        
        // Check if header exists
        if (!authHeader) {
            res.status(401).json({ 
                type: 'error',
                message: 'No authorization header provided' 
            });
            return;
        }

        // Step 2: Extract the token (remove "Bearer " prefix)
        const token = authHeader.split(' ')[1];
        
        // Check if token exists
        if (!token) {
            res.status(401).json({ 
                type: 'error',
                message: 'No token provided' 
            });
            return;
        }

        // Step 3: Get the secret key from environment variables
        const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';
        
        // Step 4: Verify the token
        // This will throw an error if:
        // - Token is malformed
        // - Token is expired
        // - Signature is invalid
        const decoded = jwt.verify(token, jwtSecret) as StudentTokenPayload;
        
        // Step 5: Check if this is a student token (not admin)
        if (decoded.role !== 'student') {
            res.status(403).json({ 
                type: 'error',
                message: 'Access denied. Student token required.' 
            });
            return;
        }

        // Attach to req.student instead of req.user
        // Now controllers can access req.student
        req.student = decoded;

        // Step 7: Call the next middleware/controller
        // This passes control to the route handler
        next();
        
    } catch (error) {
        // Handle specific JWT errors with appropriate messages
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ 
                type: 'error',
                message: 'Invalid token' 
            });
        } else if (error instanceof jwt.TokenExpiredError) {
            // Token has expired (after 3 hours)
            res.status(401).json({ 
                type: 'error',
                message: 'Token expired' 
            });
        } else {
            // Any other unexpected error
            res.status(401).json({ 
                type: 'error',
                message: 'Authentication failed' 
            });
        }
    }
};