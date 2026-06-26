import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { createCompanySchema } from './createCompany.schema';
import { createCompany } from './createCompany.service';

export const createCompanyRoute = Router();

createCompanyRoute.post(
    '/',
    validate({ body: createCompanySchema }),
    asyncHandler(async (req, res) => {
        const company = await createCompany(req.body);
        res.status(201).json(company);
    }),
);
