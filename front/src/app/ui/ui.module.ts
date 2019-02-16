import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaderComponent } from './fader/fader.component';
import { ArtnetPickerComponent } from './artnet-picker/artnet-picker.component';

@NgModule({
    declarations: [
        FaderComponent,
        ArtnetPickerComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FaderComponent,
        ArtnetPickerComponent,
    ]
})
export class UiModule { }
