import { Request, Response, Router } from "express";
import { ProjectProxy } from "src/infra/usecases-proxy/project.proxy";

const projectRouter = Router();
const projectProxy = new ProjectProxy();

projectRouter.post('/insert', (request: Request, response: Response): Promise<Response> => {
    return projectProxy.insertProjectController.handle(request, response);
});

projectRouter.put('/update', (request: Request, response: Response): Promise<Response> => {
    return projectProxy.updateProjectController.handle(request, response);
});

projectRouter.get('/get/:name', (request: Request, response: Response): Promise<Response> => {
    return projectProxy.getProjectController.handle(request, response);
});

projectRouter.get('/get-all', (request: Request, response: Response): Promise<Response> => {
    return projectProxy.getAllProjectsController.handle(request, response);
});

export { projectRouter };