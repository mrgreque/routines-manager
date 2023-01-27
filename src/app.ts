import express from 'express';
import 'express-async-errors';
import { router } from './domain/routes/router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

export { app };