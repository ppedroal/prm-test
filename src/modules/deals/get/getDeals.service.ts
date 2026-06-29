import { prisma } from '../../../lib/prisma';

export async function getDeals() {
    return prisma.deal.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
}
