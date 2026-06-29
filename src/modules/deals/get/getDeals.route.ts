import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { getDeals } from './getDeals.service';

export const getDealsRoute = Router();

getDealsRoute.get(
    '/',
    asyncHandler(async (_req, res) => {
        const deals = await getDeals();
        res.json(deals);
    }),
);
