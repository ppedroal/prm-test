import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { getCompanies } from './getCompanies.service';

export const getCompaniesRoute = Router();

getCompaniesRoute.get(
    '/',
    asyncHandler(async (_req, res) => {
        const companies = await getCompanies();
        res.json(companies);
    }),
);
