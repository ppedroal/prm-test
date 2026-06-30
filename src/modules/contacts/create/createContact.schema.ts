import { z } from 'zod';

export const createContactSchema = z.object({
    name: z.string().min(1, { error: 'Name is required' }),
    email: z.email({ error: 'Invalid email address' }),
    phone: z.string().optional(),
    companyId: z.string().min(1, { error: 'Company ID is required' }),
});
