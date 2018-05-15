import { Injectable } from '@angular/core';

@Injectable()
export class GlobalclockserviceService {
  private timer: NodeJS.Timer;

  constructor() {}

  private tick(): void {
    // TODO
  }

  public start(): void {
    this.timer = setInterval(this.tick, 1);
  }

  public stop(): void {
    clearInterval(this.timer);
  }

}
