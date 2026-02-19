import * as z from 'zod';
export const TenantGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    slug: z.number(),
    created_at: z.number(),
    users: z.number(),
    exams: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    slug: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    slug: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));