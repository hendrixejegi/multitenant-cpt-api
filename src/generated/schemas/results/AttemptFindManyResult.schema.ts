import * as z from 'zod';
export const AttemptFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  exam_id: z.string(),
  started_at: z.date(),
  submitted_at: z.date(),
  correct_answers: z.number().int(),
  wrong_answers: z.number().int(),
  status: z.unknown(),
  score: z.number().int(),
  created_at: z.date(),
  exam: z.unknown(),
  user: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});