/* tslint:disable: no-unsafe-any */
import { Injectable } from '@angular/core';
import { FixtureService } from '../fixture/fixture.service';
import { ArtnetService } from '../artnet/artnet.service';

@Injectable()
export class GlobalClockService {
    private timer: any;
    private afterTimer: any[];

    constructor(
        private fixtureService: FixtureService,
        private artnetService: ArtnetService
    ) {
        this.afterTimer = [];
    }

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
        let afterTimer = this.afterTimer.pop();;
        do {
            clearInterval(afterTimer);
            afterTimer = this.afterTimer.pop();
        } while (afterTimer);
    }


    public after(action: () => void, timeout: number): void {
        const timeOut = setTimeout(action, timeout);
        this.afterTimer.push(timeOut);
    }
}

/* tslint:enable: no-unsafe-any */
