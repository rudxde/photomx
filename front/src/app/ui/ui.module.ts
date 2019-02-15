import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaderComponent } from './fader/fader.component';

@NgModule({
    declarations: [
        FaderComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FaderComponent
    ]
})
export class UiModule { }
