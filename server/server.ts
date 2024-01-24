import { Server } from 'net';

const server: Server = null;

function start(app, api, Database, callback) {
  new api(app, Database);
  callback.apply();
}

function stop() {
  if (server) server.close();
  return true;
}

export default { start, stop };
