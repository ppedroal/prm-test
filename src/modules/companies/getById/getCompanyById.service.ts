import { prisma } from '../../../lib/prisma';
import { NotFoundError } from '../../../errors/AppError';

export async function getCompanyById(id: string) {
    const company = await prisma.company.findUnique({
        where: { id },
        include: {
            contacts: true,
            deals: true,
        },
    });
    if (!company) {
        throw new NotFoundError('Company');
    }
    return company;
}
