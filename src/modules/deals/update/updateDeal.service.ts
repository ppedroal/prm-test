import { NotFoundError } from '../../../errors/AppError';
import { prisma } from '../../../lib/prisma';
import { getDealById } from '../getById/getDealById.service';

type UpdateDealInput = {
    title?: string;
    value?: number;
    stage?: 'LEAD' | 'QUALIFIED' | 'PROPOSAL' | 'NEGOTIATION' | 'WON' | 'LOST';
    contactId?: string;
    companyId?: string;
};

export async function updateDeal(id: string, data: UpdateDealInput) {
    const deal = await getDealById(id);
    if (!deal) {
        throw new NotFoundError('Deal');
    }
    return prisma.deal.update({ where: { id }, data });
}
