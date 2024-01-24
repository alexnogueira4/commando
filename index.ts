import server from './server/server';
import { Commando } from './api';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.start(app, Commando, {}, () => {
  console.log('Started eletronic');
});

app.listen(2020, () => {
  console.log('teste funcional, porta: ', process.env.PORT);
});
