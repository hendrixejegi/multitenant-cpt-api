import * as z from 'zod';
export const ExamDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  tenant_id: z.string(),
  title: z.string(),
  description: z.string(),
  duration_minutes: z.number().int(),
  code: z.string(),
  is_published: z.boolean(),
  created_at: z.date(),
  questions: z.array(z.unknown()),
  attempts: z.array(z.unknown()),
  tenant: z.unknown()
}));