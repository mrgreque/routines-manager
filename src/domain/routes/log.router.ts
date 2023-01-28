import { Request, Response, Router } from "express";
import { LogProxy } from "src/infra/usecases-proxy/log.proxy";

const logRouter = Router();
const logProxy = new LogProxy();

logRouter.post('/get', (request: Request, response: Response): Promise<Response> => {
    return logProxy.getLogsController.handle(request, response);
});

logRouter.post('/get/:project', (request: Request, response: Response): Promise<Response> => {
    return logProxy.getLogByProjectController.handle(request, response);
});

logRouter.post('/insert', (request: Request, response: Response): Promise<Response> => {
    return logProxy.insertLogController.handle(request, response);
});

export { logRouter };