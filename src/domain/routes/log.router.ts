import { Request, Response, Router } from 'express';
import { LogProxy } from 'src/infra/usecases-proxy/log.proxy';

class LogRouter {
  public router = null;
  private socketConnection = null;

  constructor() {
    const logRouter = Router();
    const logProxy = new LogProxy();

    logRouter.get(
      '/get-all',
      (request: Request, response: Response): Promise<Response> => {
        return logProxy.getLogsController.handle(request, response);
      },
    );

    logRouter.get(
      '/get/:project',
      (request: Request, response: Response): Promise<Response> => {
        return logProxy.getLogByProjectController.handle(request, response);
      },
    );

    logRouter.post(
      '/insert',
      (request: Request, response: Response): Promise<Response> => {
        return logProxy.insertLogController.handle(
          request,
          response,
          this.socketConnection,
        );
      },
    );

    this.router = logRouter;
  }

  async setSocketConnection(socketConnection) {
    this.socketConnection = socketConnection;
  }
}

export { LogRouter };
