import * as z from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  tenant_id: z.string(),
  name: z.string(),
  email: z.string().optional(),
  password_hash: z.string().optional(),
  role: z.unknown(),
  is_guest: z.boolean(),
  created_at: z.date(),
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