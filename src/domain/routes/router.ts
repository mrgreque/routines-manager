import { Router } from "express";
import { logRouter } from "./log.router";
import { projectRouter } from "./project.router";

const router = Router();

router.use('/log', logRouter);
router.use('/project', projectRouter);

export { router };