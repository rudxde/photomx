import { Injectable } from '@angular/core';
import { FixtureService } from '../fixture/fixture.service';
import { ArtnetService } from '../artnet/artnet.service';

@Injectable()
export class GlobalClockService {
  private timer: NodeJS.Timer;

  constructor(
    private fixtureService: FixtureService,
    private artnetService: ArtnetService
  ) {}

  private tick(): void {
    this.fixtureService.tick();
    this.artnetService.sendArtnet();
  }

  public start(): void {
    this.timer = setInterval(this.tick, 16);
  }

  public stop(): void {
    clearInterval(this.timer);
  }

}
