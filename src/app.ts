import express, { type Express } from 'express'

export default class Application {
  private readonly app: Express
  constructor () {
    this.app = express()
  }

  public run (port: number): void {
    this.app.listen(port, () => { console.log(`app stated at port ${port}...`) })
  }
}
