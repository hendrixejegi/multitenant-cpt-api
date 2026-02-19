import * as z from 'zod';
export const QuestionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  exam_id: z.string(),
  text: z.string(),
  options: z.array(z.string()),
  correct_answer: z.string(),
  created_at: z.date(),
  exam: z.unknown()
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