import { prisma } from '../../../lib/prisma';

type CreateDealInput = {
    title: string;
    value: number;
    stage: 'LEAD' | 'QUALIFIED' | 'PROPOSAL' | 'NEGOTIATION' | 'WON' | 'LOST';
    contactId: string;
    companyId: string;
};

export async function createDeal(data: CreateDealInput) {
    return prisma.deal.create({ data });
}
