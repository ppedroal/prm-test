import { prisma } from './lib/prisma';

async function main() {
    await prisma.company.create({
        data: {
            name: 'Test Company',
            website: 'https://test.com',
            contacts: {
                create: {
                    name: 'Test Contact',
                    email: 'test@test.com',
                },
            },
            deals: {
                create: {
                    title: 'Test Deal',
                    value: 1000,
                },
            },
        },
    });
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });
