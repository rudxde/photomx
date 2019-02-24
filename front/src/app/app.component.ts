import { Component, OnInit } from '@angular/core';
import { ArtnetService } from './core/services/artnet/artnet.service';
import { FixtureService } from './core/services/fixture/fixture.service';
import { SimpleChannelFixture } from './core/library/SimpleChannelFixture';
import { ProgrammerService } from './core/services/programmer/programmer.service';
import { GlobalClockService } from './core/services/globalclock/globalclock.service';
import { GlobalObjectsService } from './core/services/global-objects/global-objects.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    fors: any[];
    constructor(
        private artnetService: ArtnetService,
        private fixtureService: FixtureService,
        private programmer: ProgrammerService,
        private globalClockService: GlobalClockService,
        private globalObjectService: GlobalObjectsService,
    ) {
        this.fors = new Array(200);
    }
    async ngOnInit(): Promise<void> {
        this.fixtureService.addFixture(new SimpleChannelFixture('SimpleChannelFixture', 200, this.artnetService, this.globalObjectService));
        this.globalClockService.start();
    }
    setValue(index: number, value: number): void {
        this.programmer.setChannel(this.fixtureService.fixtures[0], index, value / 100 * 255);
    }
    reset(index: number): void {
        this.programmer.reset();
    }
}
