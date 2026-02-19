import * as z from 'zod';
export const QuestionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    exam_id: z.number(),
    text: z.number(),
    options: z.number(),
    correct_answer: z.number(),
    created_at: z.number(),
    exam: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    exam_id: z.string().nullable(),
    text: z.string().nullable(),
    options: z.array(z.string()).nullable(),
    correct_answer: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    exam_id: z.string().nullable(),
    text: z.string().nullable(),
    options: z.array(z.string()).nullable(),
    correct_answer: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});