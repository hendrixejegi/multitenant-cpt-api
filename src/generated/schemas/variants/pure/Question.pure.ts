import * as z from 'zod';
// prettier-ignore
export const QuestionModelSchema = z.object({
    id: z.string(),
    exam_id: z.string(),
    text: z.string(),
    options: z.array(z.string()),
    correct_answer: z.string(),
    created_at: z.date(),
    exam: z.unknown()
}).strict();

export type QuestionPureType = z.infer<typeof QuestionModelSchema>;
