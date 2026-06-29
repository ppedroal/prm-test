import { NotFoundError } from '../../../errors/AppError';
import { prisma } from '../../../lib/prisma';
import { getCompanyById } from '../getById/getCompanyById.service';

type UpdateCompanyInput = {
    name?: string;
    website?: string;
};

export async function updateCompany(id: string, data: UpdateCompanyInput) {
    const company = await getCompanyById(id);
    if (!company) {
        throw new NotFoundError('Company');
    }
    return prisma.company.update({
        where: { id },
        data,
    });
}
