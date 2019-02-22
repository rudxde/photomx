import { Injectable } from '@angular/core';
import { ICueble } from '../../interfaces/ICueble';
import { IChannel } from '../../interfaces/IChannel';
import { ICue } from '../../interfaces/ICue';
import { GeneralCue } from '../../library/GeneralCue';
import { ValueCueble } from '../../library/ValueCueble';
import { IFixture } from '../../interfaces/IFixture';
import { Subject } from 'rxjs';

@Injectable()
export class ProgrammerService {
    cuebles: ICueble[];
    public changes: Subject<ICueble[]>;
    constructor(
    ) {
        this.cuebles = [];
        this.changes = new Subject<ICueble[]>();
    }

    setChannel(selectedFixture: IFixture, selectedChannelIndex: number, value: number): void {
        this.removeChannel(selectedFixture, selectedChannelIndex, false);
        const cuble = new ValueCueble(selectedFixture, selectedChannelIndex, value, true);
        cuble.shine(null, null);
        this.cuebles.push(cuble);
        this.changes.next(this.cuebles);
    }

    removeChannel(selectedFixture: IFixture, selectedChannelIndex: number, reset: boolean = true) {
        if (reset) {
            this.cuebles
                .filter(x => x.fixture === selectedFixture && x.channelIndex == selectedChannelIndex)
                .forEach(x => x.reset());
        }
        this.cuebles = this.cuebles.filter(x => !(x.fixture === selectedFixture && x.channelIndex == selectedChannelIndex));
        this.changes.next(this.cuebles);
    }

    reset(): void {
        this.cuebles = [];
        this.changes.next(this.cuebles);
    }

    generateCue(): GeneralCue {
        const result = new GeneralCue();
        result.cuebles = this.cuebles.map(x => x.clone(false));
        return result;
    }
}
