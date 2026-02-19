import * as z from 'zod';
export const TenantFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  created_at: z.date(),
  users: z.array(z.unknown()),
  exams: z.array(z.unknown())
}));