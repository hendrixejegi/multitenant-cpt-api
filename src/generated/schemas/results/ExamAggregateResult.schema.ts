import * as z from 'zod';
export const ExamAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    tenant_id: z.number(),
    title: z.number(),
    description: z.number(),
    duration_minutes: z.number(),
    code: z.number(),
    is_published: z.number(),
    created_at: z.number(),
    questions: z.number(),
    attempts: z.number(),
    tenant: z.number()
  }).optional(),
  _sum: z.object({
    duration_minutes: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    duration_minutes: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    tenant_id: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    duration_minutes: z.number().int().nullable(),
    code: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    tenant_id: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    duration_minutes: z.number().int().nullable(),
    code: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});