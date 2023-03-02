import express from 'express';
import 'express-async-errors';
import { router } from './domain/routes/router';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

export { app };