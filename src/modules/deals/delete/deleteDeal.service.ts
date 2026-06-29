import { NotFoundError } from '../../../errors/AppError';
import { prisma } from '../../../lib/prisma';
import { getDealById } from '../getById/getDealById.service';

export async function deleteDeal(id: string) {
    const deal = await getDealById(id);
    if (!deal) {
        throw new NotFoundError('Deal');
    }
    return prisma.deal.delete({ where: { id } });
}
