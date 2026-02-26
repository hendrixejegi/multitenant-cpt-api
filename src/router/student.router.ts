// src/router/student.router.ts
/*
 * Student Exam Participation Routes
 * 
 * This file defines all the API endpoints related to students taking exams.
 */

import { Router } from 'express'; // Express router to create route handlers
import { 
    startExam, 
    getAttemptDetails, 
    submitAnswer, 
    submitExam 
} from '../controllers/student.controller';   // Import the functions that handle the actual logic
import { validateStudentToken } from '../middlewares/auth.middleware';  // Import authentication middleware


// Create a new router instance to group our routes together
const router = Router();

// Public route - no token needed
router.post('/student/exams/start', startExam);

// Protected routes - need valid student token
router.get('/student/attempts/:attemptId', validateStudentToken, getAttemptDetails); //Fetches exam details and questions for an active attempt
router.post('/student/attempts/:attemptId/answers', validateStudentToken, submitAnswer); //Submits or updates an answer for a specific question
router.post('/student/attempts/:attemptId/submit', validateStudentToken, submitExam); //Finalizes the exam attempt, calculates score, and marks as submitted

// Export the router so it can be used in app.ts
export default router;
