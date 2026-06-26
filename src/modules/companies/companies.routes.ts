import { Router } from 'express';
import { createCompanyRoute } from './create/createCompany.route';
import { getCompaniesRoute } from './get/getCompanies.route';
import { getCompanyByIdRoute } from './getById/getCompanyById.route';
import { updateCompanyRoute } from './update/updateCompany.route';
import { deleteCompanyRoute } from './delete/deleteCompany.route';

export const companiesRouter = Router();

companiesRouter.use('/', createCompanyRoute);
companiesRouter.use('/', getCompaniesRoute);
companiesRouter.use('/', getCompanyByIdRoute);
companiesRouter.use('/', updateCompanyRoute);
companiesRouter.use('/', deleteCompanyRoute);
