import { prisma } from '../../../lib/prisma';

type CreateCompanyInput = {
    name: string;
    website?: string;
};

export async function createCompany(data: CreateCompanyInput) {
    return prisma.company.create({ data });
}
