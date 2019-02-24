import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammerService } from './services/programmer/programmer.service';
import { GlobalClockService } from './services/globalclock/globalclock.service';
import { FixtureService } from './services/fixture/fixture.service';
import { StorageService } from './services/storage/storage.service';
import { ArtnetService } from './services/artnet/artnet.service';
import { GlobalObjectsService } from './services/global-objects/global-objects.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                ArtnetService,
                StorageService,
                FixtureService,
                GlobalClockService,
                ProgrammerService,
                GlobalObjectsService,
            ]
        };
    }
}
