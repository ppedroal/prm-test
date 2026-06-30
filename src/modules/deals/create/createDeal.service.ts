import { z } from 'zod';
import { prisma } from '../../../lib/prisma';
import { createDealSchema } from './createDeal.schema';

type CreateDealInput = z.infer<typeof createDealSchema>;

export async function createDeal(data: CreateDealInput) {
    return prisma.deal.create({ data });
}
