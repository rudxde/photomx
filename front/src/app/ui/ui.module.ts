import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaderComponent } from './fader/fader.component';
import { ArtnetPickerComponent } from './artnet-picker/artnet-picker.component';
import { CubleDataComponent } from './programmer/cuble-data/cuble-data.component';

@NgModule({
    declarations: [
        FaderComponent,
        ArtnetPickerComponent,
        CubleDataComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FaderComponent,
        ArtnetPickerComponent,
        CubleDataComponent,
    ]
})
export class UiModule { }
