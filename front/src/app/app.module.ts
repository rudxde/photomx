import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { ArtnetService } from './core/services/artnet/artnet.service';
import { StorageService } from './core/services/storage/storage.service';
import { FaderComponent } from './core/controls/fader/fader.component';
import { FixtureService } from './core/services/fixture/fixture.service';
import { GlobalClockService } from './core/services/globalclock/globalclock.service';
import { ProgrammerService } from './core/services/programmer/programmer.service';

@NgModule({
  declarations: [
    AppComponent,
    FaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [
    ArtnetService,
    StorageService,
    FixtureService,
    GlobalClockService,
    ProgrammerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
