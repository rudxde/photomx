import { Injectable } from '@angular/core';
import { FixtureService } from '../fixture/fixture.service';
import { ArtnetService } from '../artnet/artnet.service';

@Injectable()
export class GlobalClockService {
    private timer: any;

    constructor(
        private fixtureService: FixtureService,
        private artnetService: ArtnetService
    ) { }

    private tick(): void {
        try {
            this.fixtureService.tick();
            this.artnetService.sendArtnet();
        } catch (err) {
            this.stop();
            console.error(err);
        }
    }

    public start(): void {
        this.timer = setInterval(this.tick.bind(this), 16);
    }

    public stop(): void {
        clearInterval(this.timer);
    }

}
