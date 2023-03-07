import express from 'express';
import 'express-async-errors';
import { DefaultRouter } from './domain/routes/router';
import cors from 'cors';

class App {
  public socketConnection = null;
  public app = null;
  private defaultRouter = null;

  constructor() {
    const app = express();
    this.defaultRouter = new DefaultRouter();

    app.use(
      cors({
        origin: '*',
      }),
    );
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/', this.defaultRouter.router);

    this.app = app;
  }

  async setSocketConnection(socketConnection) {
    this.socketConnection = socketConnection;
    this.defaultRouter.setSocketConnection(socketConnection);
  }
}

export { App };
