import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { idParamSchema } from '../../../middlewares/idParamSchema';
import { updateCompanySchema } from './updateCompany.schema';
import { updateCompany } from './updateCompany.service';

export const updateCompanyRoute = Router();

updateCompanyRoute.put(
    '/:id',
    validate({ params: idParamSchema, body: updateCompanySchema }),
    asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };
        const company = await updateCompany(id, req.body);
        res.json(company);
    }),
);
