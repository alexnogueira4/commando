import { Request, Response } from 'express';
import shelljs from 'shelljs';

enum CommandoEnum {
  restart,
  stop,
  start
}

class Controller {
  private async serverRunCommando(commando: keyof CommandoEnum) {
    await shelljs.exec(`pm2 ${commando} rasp`, { async: true, silent: false });
  }

  public async runCommando(req, res) {
    const { commando } = req.params;

    try {
      await this.serverRunCommando(commando as keyof CommandoEnum);
      res.json({
        message: 'Restarting server...'
      });
    } catch (error) {
      console.log(`Error trying to run commando the server: ${commando}`, error);
      throw error;
    }
  }
}

export default Controller;
