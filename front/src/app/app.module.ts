import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { UiModule } from './ui/ui.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CoreModule.forRoot(),
        UiModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
