import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { ArtnetService } from './core/services/artnet/artnet.service';
import { StorageService } from './core/services/storage/storage.service';
import { FaderComponent } from './core/controls/fader/fader.component';
import { FixtureService } from './core/services/fixture/fixture.service';

@NgModule({
  declarations: [
    AppComponent,
    FaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ArtnetService,
    StorageService,
    FixtureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
