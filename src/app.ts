import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import { router } from './routes';

export const app = express();

app.use(express.json());
app.use('/api', router);
app.use(errorHandler);
