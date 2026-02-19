import * as z from 'zod';
export const AttemptGroupByResultSchema = z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  exam_id: z.string(),
  started_at: z.date(),
  submitted_at: z.date(),
  correct_answers: z.number().int(),
  wrong_answers: z.number().int(),
  score: z.number().int(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    exam_id: z.number(),
    started_at: z.number(),
    submitted_at: z.number(),
    correct_answers: z.number(),
    wrong_answers: z.number(),
    status: z.number(),
    score: z.number(),
    created_at: z.number(),
    exam: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    correct_answers: z.number().nullable(),
    wrong_answers: z.number().nullable(),
    score: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    correct_answers: z.number().nullable(),
    wrong_answers: z.number().nullable(),
    score: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    exam_id: z.string().nullable(),
    started_at: z.date().nullable(),
    submitted_at: z.date().nullable(),
    correct_answers: z.number().int().nullable(),
    wrong_answers: z.number().int().nullable(),
    score: z.number().int().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    exam_id: z.string().nullable(),
    started_at: z.date().nullable(),
    submitted_at: z.date().nullable(),
    correct_answers: z.number().int().nullable(),
    wrong_answers: z.number().int().nullable(),
    score: z.number().int().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));