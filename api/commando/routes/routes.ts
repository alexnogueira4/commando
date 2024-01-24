import { Router, Request, Response } from 'express';
import Controller from '../controllers/controller';

class Routes {
  protected Controller: Controller;
  protected App;
  protected Router: Router;
  protected MainRoute: string = '/commando';

  constructor(app, controller: Controller) {
    this.App = app;
    this.Controller = controller;
  }

  init() {
    this.App.get(this.MainRoute + '/:commando', (req: Request, res: Response) =>
      this.Controller.runCommando(req, res)
    );
  }
}

export default Routes;
