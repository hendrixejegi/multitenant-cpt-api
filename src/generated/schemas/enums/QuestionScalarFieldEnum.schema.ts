import * as z from 'zod';

export const QuestionScalarFieldEnumSchema = z.enum(['id', 'exam_id', 'text', 'options', 'correct_answer', 'created_at'])

export type QuestionScalarFieldEnum = z.infer<typeof QuestionScalarFieldEnumSchema>;