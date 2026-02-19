import * as z from 'zod';
// prettier-ignore
export const QuestionInputSchema = z.object({
    id: z.string(),
    exam_id: z.string(),
    text: z.string(),
    options: z.array(z.string()),
    correct_answer: z.string(),
    created_at: z.date(),
    exam: z.unknown()
}).strict();

export type QuestionInputType = z.infer<typeof QuestionInputSchema>;
