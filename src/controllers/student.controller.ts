// src/controllers/student.controller.ts
/**
 * Student Exam Controller
 * 
 * This file contains all the business logic for student exam operations.Each function 
 * handles a specific API endpoint and contains the logic for:
 * - Validating input data
 * - Interacting with the database (or using mock data for now)
 * - Formatting responses
 * - Handling errors
 */


import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { StudentTokenPayload } from '../middlewares/auth.middleware';

// Shape of data expected when starting an exam
interface StartExamBody {
    accessCode: string; // The code that identifies which exam to take
    name: string;  //Student's name (required)
    email?: string;  //Student's email (optional for guest students)
}

// Shape of data expected when submitting an answer
interface SubmitAnswerBody {
    questionId: string; // Which question is being answered
    answerText?: string; // For text-based answers
    optionId?: string; // For multiple choice questions (selected option ID)
}

// Extend Request type to include student property from the auth middleware
interface StudentRequest extends Request {
    student?: StudentTokenPayload;  // Contains userId, attemptId, and role from the JWT token
}

//START EXAM - the entry point for a student taking an exam
export const startExam = async (req: Request, res: Response): Promise<void> => {
    try {
        // Extract the data sent by the student from the request body
        const { accessCode, name, email } = req.body as StartExamBody;

        // Input validation - always check required fields first
        if (!accessCode || !name) {
            // 400 Bad Request - client error, they didn't send required data
            res.status(400).json({
                type: 'error',
                message: 'Access code and name are required'
            });
            return;
        }

        // Generate mock IDs for testing
        // Date.now() gives unique timestamp-based IDs
        const mockAttemptId = 'temp-' + Date.now();
        // uuidv4() generates a truly unique ID (e.g., "123e4567-e89b-12d3-a456-426614174000")
        const mockUserId = 'guest-' + uuidv4();

        /**
         * Create a JWT (JSON Web Token)
         * This token will be sent with every subsequent request to authenticate the student
         * The token contains:
         * - userId: Who the student is
         * - attemptId: Which exam attempt they're working on
         * - role: What type of user (prevents admin access)
         * - iat: Issued at time (automatically added)
         * - exp: Expiration time (3 hours from now)
         */
        const token = jwt.sign(
            {
                userId: mockUserId,
                attemptId: mockAttemptId,
                role: 'student'
            },
            process.env.JWT_SECRET || 'your-secret-key', // Secret from .env
            { expiresIn: '3h' }
        );

        // Send successful response back to the client
        res.status(201).json({
            type: 'success',
            message: 'Exam started successfully',
            data: {
                attemptId: mockAttemptId,
                token: token, // Client must save this for subsequent requests
                exam: {
                    title: 'Mathematics Test',
                    duration: 60,
                    totalQuestions: 20
                }
            }
        });

    } catch (error) {
        // Catch any unexpected errors
        console.error('Error in startExam:', error);
        res.status(500).json({  // 500 = Internal Server Error
            type: 'error',
            message: 'Failed to start exam'
        });
    }
};

/**
 * 5.2 GET ATTEMPT DETAILS - GET /student/attempts/:attemptId
 * 
 * Retrieves all questions for an exam attempt.
 * Security checks:
 * 1. Student must be authenticated (token required)
 * 2. Student can only access their own attempt (attemptId in token must match URL)
 * 
 * Returns:
 * - Exam title and time remaining
 * - All questions (without correct answers)
 * - Previously submitted answers (if any)
 */
export const getAttemptDetails = async (req: StudentRequest, res: Response): Promise<void> => {
    try {
        // Get the attemptId from the URL parameter
        const { attemptId } = req.params;

        // Check if student is authenticated (token was valid)
        if (!req.student) {
            res.status(401).json({
                type: 'error',
                message: 'Unauthorized - Valid student token required'
            });
            return;
        }

        // Verify the student is accessing their own attempt
        if (req.student.attemptId !== attemptId) {
            res.status(403).json({
                type: 'error',
                message: 'Forbidden - You can only access your own attempt'
            });
            return;
        }

         // Mock response with sample questions
        res.json({
            type: 'success',
            message: 'Attempt details retrieved successfully',
            data: {
                attemptId,
                examTitle: 'Mathematics Test',
                timeRemaining: 3600,
                questions: [
                    {
                        id: 'q1',
                        text: 'What is 2 + 2?',
                        type: 'multiple-choice',
                        options: [
                            { id: 'opt1', text: '3' },
                            { id: 'opt2', text: '4' },
                            { id: 'opt3', text: '5' }
                        ]
                    }
                ]
            }
        });

    } catch (error) {
        console.error('Error in getAttemptDetails:', error);
        res.status(500).json({
            type: 'error',
            message: 'Failed to fetch attempt details'
        });
    }
};

/**
 * 5.3 SUBMIT ANSWER - POST /student/attempts/:attemptId/answers
 * 
 * Saves a student's answer to a question.
 * This can be called multiple times - if an answer already exists, it updates it.
 * 
 * Security checks:
 * 1. Student must be authenticated
 * 2. Student can only answer questions in their own attempt
 */
export const submitAnswer = async (req: StudentRequest, res: Response): Promise<void> => {
    try {
        // Get attemptId from URL
        const { attemptId } = req.params;
        // Get answer data from request body
        const { questionId, answerText, optionId } = req.body as SubmitAnswerBody;

        // Check authentication
        if (!req.student) {
            res.status(401).json({
                type: 'error',
                message: 'Unauthorized - Valid student token required'
            });
            return;
        }

        // Security check: Verify student is answering their own attempt
        if (req.student.attemptId !== attemptId) {
            res.status(403).json({
                type: 'error',
                message: 'Forbidden - You can only answer questions in your own attempt'
            });
            return;
        }

        // Validate required fields
        if (!questionId) {
            res.status(400).json({
                type: 'error',
                message: 'Question ID is required'
            });
            return;
        }

        // Mock successful response
        res.json({
            type: 'success',
            message: 'Answer saved successfully',
            data: {
                answerId: 'ans-' + Date.now(), // Unique ID for this answer
                savedAt: new Date().toISOString() // Timestamp of when answer was saved
            }
        });

    } catch (error) {
        console.error('Error in submitAnswer:', error);
        res.status(500).json({
            type: 'error',
            message: 'Failed to save answer'
        });
    }
};

/**
 * 5.4 SUBMIT EXAM - POST /student/attempts/:attemptId/submit
 * 
 * Finalizes the exam attempt, calculates the score, and marks it as submitted.
 * After this, the student cannot make any more changes.
 * 
 * Security checks:
 * 1. Student must be authenticated
 * 2. Student can only submit their own attempt
 */
export const submitExam = async (req: StudentRequest, res: Response): Promise<void> => {
    try {
        const { attemptId } = req.params;

        // Check authentication
        if (!req.student) {
            res.status(401).json({
                type: 'error',
                message: 'Unauthorized - Valid student token required'
            });
            return;
        }

        // Security check: Verify student is submitting their own attempt
        if (req.student.attemptId !== attemptId) {
            res.status(403).json({
                type: 'error',
                message: 'Forbidden - You can only submit your own attempt'
            });
            return;
        }

         // Mock response with calculated score
        res.json({
            type: 'success',
            message: 'Exam submitted successfully',
            data: {
                score: 85, // Percentage score
                totalQuestions: 20,
                correctAnswers: 17, // 17 out of 20 correct
                submittedAt: new Date().toISOString()
            }
        });

    } catch (error) {
        console.error('Error in submitExam:', error);
        res.status(500).json({
            type: 'error',
            message: 'Failed to submit exam'
        });
    }
};