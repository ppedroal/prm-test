import { Router } from 'express';
import { asyncHandler } from '../../../middlewares/asyncHandler';
import { validate } from '../../../middlewares/validate';
import { idParamSchema } from '../shared/idParam.schema';
import { deleteCompany } from './deleteCompany.service';

export const deleteCompanyRoute = Router();

deleteCompanyRoute.delete(
    '/:id',
    validate({ params: idParamSchema }),

    asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };
        await deleteCompany(id);
        res.status(204).send();
    }),
);
