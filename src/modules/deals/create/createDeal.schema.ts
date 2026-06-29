import { z } from 'zod';

export const createDealSchema = z.object({
    title: z.string().min(1, { error: 'Title is required' }),
    value: z.number().min(0, { error: 'Value must be greater than 0' }),
    stage: z.enum(['LEAD', 'QUALIFIED', 'PROPOSAL', 'NEGOTIATION', 'WON', 'LOST']),
    contactId: z.string().min(1, { error: 'Contact ID is required' }),
    companyId: z.string().min(1, { error: 'Company ID is required' }),
});
