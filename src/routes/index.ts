import { Router } from 'express';
import { companiesRouter } from '../modules/companies/companies.routes';
import { contactsRouter } from '../modules/contacts/contacts.routes';
import { dealsRouter } from '../modules/deals/deals.routes';
import { notesRouter } from '../modules/notes/notes.routes';
import { tasksRouter } from '../modules/tasks/tasks.routes';

export const router = Router();

router.use('/companies', companiesRouter);
router.use('/contacts', contactsRouter);
router.use('/deals', dealsRouter);
router.use('/tasks', tasksRouter);
router.use('/notes', notesRouter);
