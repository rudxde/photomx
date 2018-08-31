import { Component, OnInit } from '@angular/core';
import { ArtnetService } from './core/services/artnet/artnet.service';
import { FixtureService } from './core/services/fixture/fixture.service';
import { SimpleChannelFixture } from './core/library/SimpleChannelFixture';
import { ProgrammerService } from './core/services/programmer/programmer.service';
import { GlobalClockService } from './core/services/globalclock/globalclock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private artnetService: ArtnetService,
    private fixtureService: FixtureService,
    private programmer: ProgrammerService,
    private globalGlockService: GlobalClockService,
  ) { }
  async ngOnInit() {
    this.artnetService.addArtnetClient('192.168.178.106', 0, 2);
    this.fixtureService.addFixture(new SimpleChannelFixture(2, this.artnetService));
    this.globalGlockService.start();
  }
  on(index: number) {
    this.programmer.setChannel(this.fixtureService.fixtures[0], index, 255);
  }
  off(index: number) {
    this.programmer.setChannel(this.fixtureService.fixtures[0], index, 0);
  }
}
