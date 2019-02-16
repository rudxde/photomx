import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { UiModule } from './ui/ui.module';
import { ConfigModule } from './config/config.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        CoreModule.forRoot(),
        UiModule,
        ConfigModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
