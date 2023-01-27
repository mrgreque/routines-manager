import { Router } from "express";
import { logRouter } from "./log.router";

const router = Router();

router.use('/log', logRouter);

export { router };