import * as z from 'zod';
export const UserGroupByResultSchema = z.array(z.object({
  id: z.string(),
  tenant_id: z.string(),
  name: z.string(),
  email: z.string(),
  password_hash: z.string(),
  is_guest: z.boolean(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    tenant_id: z.number(),
    name: z.number(),
    email: z.number(),
    password_hash: z.number(),
    role: z.number(),
    is_guest: z.number(),
    created_at: z.number(),
    attempts: z.number(),
    tenant: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    tenant_id: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    password_hash: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    tenant_id: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    password_hash: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));