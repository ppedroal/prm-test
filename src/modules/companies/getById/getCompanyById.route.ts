import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { idParamSchema } from '../../../middlewares/idParamSchema';
import { getCompanyById } from './getCompanyById.service';

export const getCompanyByIdRoute = Router();

getCompanyByIdRoute.get(
    '/:id',
    validate({ params: idParamSchema }),
    asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };
        const company = await getCompanyById(id);
        res.json(company);
    }),
);
