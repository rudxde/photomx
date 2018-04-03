import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { ArtnetService } from './core/services/artnet/artnet.service';
import { FaderComponent } from './core/controls/fader/fader.component';

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
    ArtnetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
