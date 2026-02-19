import * as z from 'zod';
export const TenantCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  created_at: z.date(),
  users: z.array(z.unknown()),
  exams: z.array(z.unknown())
});