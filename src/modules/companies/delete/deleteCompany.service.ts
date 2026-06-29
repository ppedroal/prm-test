import { NotFoundError } from '../../../errors/AppError';
import { prisma } from '../../../lib/prisma';
import { getCompanyById } from '../getById/getCompanyById.service';

export async function deleteCompany(id: string) {
    const company = await getCompanyById(id);
    if (!company) {
        throw new NotFoundError('Company');
    }
    return prisma.company.delete({ where: { id } });
}
