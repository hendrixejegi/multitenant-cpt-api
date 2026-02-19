import * as z from 'zod';
export const UserDeleteResultSchema = z.nullable(z.object({
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
}));