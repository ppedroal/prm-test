import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { idParamSchema } from '../../../middlewares/idParamSchema';
import { updateDealSchema } from './updateDeal.schema';
import { updateDeal } from './updateDeal.service';

export const updateDealRoute = Router();

updateDealRoute.put(
    '/:id',
    validate({ params: idParamSchema, body: updateDealSchema }),
    asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };
        const deal = await updateDeal(id, req.body);
        res.json(deal);
    }),
);
