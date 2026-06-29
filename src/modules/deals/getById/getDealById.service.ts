import { NotFoundError } from '../../../errors/AppError';
import { prisma } from '../../../lib/prisma';

export async function getDealById(id: string) {
    const deal = await prisma.deal.findUnique({
        where: { id },
        include: {
            contact: true,
            company: true,
            tasks: true,
            notes: true,
        },
    });
    if (!deal) {
        throw new NotFoundError('Deal');
    }
    return deal;
}
