import { Express } from 'express';
import Controller from './controllers/controller';
import Routes from './routes/routes';

export class Commando {
  protected App: Express;
  protected database;
  protected controller: Controller;
  protected Routes: Routes;

  constructor(app: Express, database) {
    this.App = app;
    this.database = database;
    this.controller = new Controller();

    this.Routes = new Routes(this.App, this.controller);
    this.Routes.init();
  }
}
