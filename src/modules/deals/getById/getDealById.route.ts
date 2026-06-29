import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { idParamSchema } from '../../../middlewares/idParamSchema';
import { getDealById } from './getDealById.service';

export const getDealByIdRoute = Router();

getDealByIdRoute.get(
    '/:id',
    validate({ params: idParamSchema }),
    asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };
        const deal = await getDealById(id);
        res.json(deal);
    }),
);
