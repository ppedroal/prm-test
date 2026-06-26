import { z } from 'zod';

export const createCompanySchema = z.object({
    name: z.string().min(1, { error: 'Name is required' }),
    website: z.url({ error: 'Invalid website URL' }).optional(),
});
