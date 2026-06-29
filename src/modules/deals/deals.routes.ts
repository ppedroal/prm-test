import { Router } from 'express';
import { createDealRoute } from './create/createDeal.route';
import { getDealsRoute } from './get/getDeals.route';
import { updateDealRoute } from './update/updateDeal.route';
import { getDealByIdRoute } from './getById/getDealById.route';
import { deleteDealRoute } from './delete/deleteDeal.route';

export const dealsRouter = Router();

dealsRouter.use('/', createDealRoute);
dealsRouter.use('/', getDealsRoute);
dealsRouter.use('/', getDealByIdRoute);
dealsRouter.use('/', updateDealRoute);
dealsRouter.use('/', deleteDealRoute);
