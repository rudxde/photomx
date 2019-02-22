import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProgrammerService } from '../../../core/services/programmer/programmer.service';
import { ICueble } from '../../../core/interfaces/ICueble';

@Component({
    selector: 'app-cuble-data',
    templateUrl: './cuble-data.component.html',
    styleUrls: ['./cuble-data.component.css']
})
export class CubleDataComponent implements OnInit {

    programmerCuebles: ICueble[];

    constructor(
        private programmerService: ProgrammerService,
        private changeDetector: ChangeDetectorRef,
    ) { }

    ngOnInit() {
        this.programmerService.changes.subscribe(cuebles => {
            this.programmerCuebles = cuebles;
            this.changeDetector.detectChanges();
        });
    }

    removeCueble(cueble: ICueble) {
        this.programmerService.removeChannel(cueble.fixture, cueble.channelIndex);
    }

}
