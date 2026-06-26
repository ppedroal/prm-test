import { Prisma } from '@prisma/client';
import type { NextFunction, Request, Response } from 'express';
import { z, ZodError } from 'zod';
import { AppError } from '../errors/AppError';

export function errorHandler(
    err: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction,
): void {
    if (err instanceof ZodError) {
        const { fieldErrors } = z.flattenError(err);
        res.status(400).json({
            error: 'Validation error',
            details: fieldErrors,
        });
        return;
    }

    if (err instanceof AppError) {
        res.status(err.statusCode).json({ error: err.message });
        return;
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
        res.status(409).json({ error: 'Record already exists' });
        return;
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2003') {
        res.status(400).json({ error: 'Invalid reference' });
        return;
    }

    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
}
