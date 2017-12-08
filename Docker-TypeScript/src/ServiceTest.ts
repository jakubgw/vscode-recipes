
import { Injectable, Injector } from 'injection-js';

@Injectable()
export class ServiceTest {
  constructor() {}

  public getText() : string {
    return "TEST";
  }
}