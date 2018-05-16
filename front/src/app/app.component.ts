import { Component, OnInit } from '@angular/core';
import { ArtnetService } from './core/services/artnet/artnet.service';
import { FixtureService } from './core/services/fixture/fixture.service';
import { SimpleChannelFixture } from './core/library/SimpleChannelFixture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private artnetService: ArtnetService,
    private fixtureService: FixtureService,
  ) { }
  async ngOnInit() {
    this.fixtureService.addFixture(new SimpleChannelFixture(1, this.artnetService));
  }
}
