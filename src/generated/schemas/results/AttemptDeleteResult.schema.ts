import * as z from 'zod';
export const AttemptDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  user_id: z.string(),
  exam_id: z.string(),
  started_at: z.date(),
  submitted_at: z.date().optional(),
  correct_answers: z.number().int(),
  wrong_answers: z.number().int(),
  status: z.unknown(),
  score: z.number().int(),
  created_at: z.date(),
  exam: z.unknown(),
  user: z.unknown()
}));