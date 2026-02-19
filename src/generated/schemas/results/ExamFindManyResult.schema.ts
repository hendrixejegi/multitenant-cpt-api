import * as z from 'zod';
export const ExamFindManyResultSchema = z.object({
  data: z.array(z.object({
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