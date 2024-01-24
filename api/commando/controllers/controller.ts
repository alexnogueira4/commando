import shelljs from 'shelljs';

enum CommandoEnum {
  restart,
  stop,
  start
};

class Controller {
  constructor(_database: any) {
  }

  private async serverRunCommando(commando: CommandoEnum) {
    await shelljs.exec(`pm2 ${commando} rasp`, { async: true, silent: false });
  }

  public async runCommando(req: any, res: any) {
    const { commando } = req.params

    try {
      await this.serverRunCommando(commando);
      res.json({
        message: "Restarting server..."
      })
    } catch (error) {
      console.log(`Error trying to run commando the server: ${commando}`, error)
      throw error
    }
  }
}

export default Controller