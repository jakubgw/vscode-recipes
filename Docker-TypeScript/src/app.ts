import * as express from 'express'
import {ServiceTest} from './ServiceTest'

import { Injectable } from 'injection-js';


@Injectable()
export class App {
  private express;
  private server;

  constructor (private testService : ServiceTest) {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: this.testService.getText()
      })
    })
    this.express.use('/', router)
  }

  public init (port : number) : void {

    this.server = this.express.listen(port, (err) => {
      if (err) {
        return console.log(err)
      }
    
      return console.log(`server is listening on ${port}`)
    });    
  }

  public close() : void {
    if(this.server){
      this.server.close();
    }      
  }


}
