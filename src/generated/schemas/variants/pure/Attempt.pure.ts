import * as z from 'zod';
import { StatusEnumSchema } from '../../enums/StatusEnum.schema';
// prettier-ignore
export const AttemptModelSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    exam_id: z.string(),
    started_at: z.date(),
    submitted_at: z.date(),
    correct_answers: z.number().int(),
    wrong_answers: z.number().int(),
    status: StatusEnumSchema,
    score: z.number().int(),
    created_at: z.date(),
    exam: z.unknown(),
    user: z.unknown()
}).strict();

export type AttemptPureType = z.infer<typeof AttemptModelSchema>;
