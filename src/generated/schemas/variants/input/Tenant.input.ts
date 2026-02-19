import * as z from 'zod';
// prettier-ignore
export const TenantInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    created_at: z.date(),
    users: z.array(z.unknown()),
    exams: z.array(z.unknown())
}).strict();

export type TenantInputType = z.infer<typeof TenantInputSchema>;
