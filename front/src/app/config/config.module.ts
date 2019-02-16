import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtnetClientsComponent } from './artnet-clients/artnet-clients.component';
import { UiModule } from '../ui/ui.module';
import { ConfigPanelComponent } from './config-panel/config-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ArtnetClientsComponent,
        ConfigPanelComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UiModule,
    ],
    exports: [
        ConfigPanelComponent,
    ]
})
export class ConfigModule { }
