import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { createDealSchema } from './createDeal.schema';
import { createDeal } from './createDeal.service';

export const createDealRoute = Router();

createDealRoute.post(
    '/',
    validate({ body: createDealSchema }),
    asyncHandler(async (req, res) => {
        const deal = await createDeal(req.body);
        res.status(201).json(deal);
    }),
);
