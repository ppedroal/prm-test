import { z } from 'zod';

export const updateCompanySchema = z.object({
    name: z.string().min(1).optional(),
    website: z.url({ error: 'Invalid website URL' }).optional(),
});
