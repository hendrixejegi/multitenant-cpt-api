import * as z from 'zod';

export const ExamScalarFieldEnumSchema = z.enum(['id', 'tenant_id', 'title', 'description', 'duration_minutes', 'code', 'is_published', 'created_at'])

export type ExamScalarFieldEnum = z.infer<typeof ExamScalarFieldEnumSchema>;