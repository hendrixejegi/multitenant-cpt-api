import * as z from 'zod';
import { StatusEnumSchema } from '../../enums/StatusEnum.schema';
// prettier-ignore
export const AttemptInputSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    exam_id: z.string(),
    started_at: z.date(),
    submitted_at: z.date().optional().nullable(),
    correct_answers: z.number().int(),
    wrong_answers: z.number().int(),
    status: StatusEnumSchema,
    score: z.number().int(),
    created_at: z.date(),
    exam: z.unknown(),
    user: z.unknown()
}).strict();

export type AttemptInputType = z.infer<typeof AttemptInputSchema>;
