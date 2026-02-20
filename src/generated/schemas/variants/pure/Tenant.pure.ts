import * as z from 'zod';
// prettier-ignore
export const TenantModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    created_at: z.date(),
    users: z.array(z.unknown()),
    exams: z.array(z.unknown())
}).strict();

export type TenantPureType = z.infer<typeof TenantModelSchema>;
