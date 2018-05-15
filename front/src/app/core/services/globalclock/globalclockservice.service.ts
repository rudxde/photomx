import { Injectable } from '@angular/core';
import { FixtureService } from '../fixture/fixture.service';
import { ArtnetService } from '../artnet/artnet.service';

@Injectable()
export class GlobalclockserviceService {
  private timer: NodeJS.Timer;
  private fixtureService: FixtureService;
  private artnetService: ArtnetService;


  constructor(fixtureService: FixtureService, artnetService: ArtnetService) {
    this.fixtureService = fixtureService;
    this.artnetService = artnetService;
  }

  private tick(): void {
    this.fixtureService.tick();
    this.artnetService.sendArtnet();
  }

  public start(): void {
    this.timer = setInterval(this.tick, 200);  // TODO: delay is currently quite arbitrary
  }

  public stop(): void {
    clearInterval(this.timer);
  }

}
