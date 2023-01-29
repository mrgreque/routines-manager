import { Request, Response, Router } from "express";
import { ProjectProxy } from "src/infra/usecases-proxy/project.proxy";

const projectRouter = Router();
const projectProxy = new ProjectProxy();

projectRouter.post('/insert', (request: Request, response: Response): Promise<Response> => {
    return projectProxy.insertProjectController.handle(request, response);
});

export { projectRouter };