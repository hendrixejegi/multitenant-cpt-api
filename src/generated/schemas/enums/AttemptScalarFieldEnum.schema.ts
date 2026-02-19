import * as z from 'zod';

export const AttemptScalarFieldEnumSchema = z.enum(['id', 'user_id', 'exam_id', 'started_at', 'submitted_at', 'correct_answers', 'wrong_answers', 'status', 'score', 'created_at'])

export type AttemptScalarFieldEnum = z.infer<typeof AttemptScalarFieldEnumSchema>;