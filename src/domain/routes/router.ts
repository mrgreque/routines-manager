import { Router } from 'express';
import { LogRouter } from './log.router';
import { ProjectRouter } from './project.router';

class DefaultRouter {
  public router = null;
  private socketConnection = null;
  private logRouter = null;
  private projectRouter = null;

  constructor() {
    const router = Router();
    this.projectRouter = new ProjectRouter();
    this.logRouter = new LogRouter();

    router.use('/log', this.logRouter.router);
    router.use('/project', this.projectRouter.router);

    this.router = router;
  }

  async setSocketConnection(socketConnection) {
    this.socketConnection = socketConnection;
    this.projectRouter.setSocketConnection(this.socketConnection);
    this.logRouter.setSocketConnection(this.socketConnection);
  }
}

export { DefaultRouter };
