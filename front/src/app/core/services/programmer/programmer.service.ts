import { Injectable } from '@angular/core';
import { ICueble } from '../../interfaces/ICueble';
import { IChannel } from '../../interfaces/IChannel';
import { ICue } from '../../interfaces/ICue';
import { GeneralCue } from '../../library/GeneralCue';
import { ValueCueble } from '../../library/ValueCueble';
import { IFixture } from '../../interfaces/IFixture';

@Injectable()
export class ProgrammerService {
    cuebles: ICueble[];
    setChannel(selectedFixture: IFixture, selectedChannelIndex: number, value: number): void {
        const cueble = new ValueCueble(selectedFixture, selectedChannelIndex, value, true);
        cueble.shine(null, null);
        this.cuebles.push(cueble);
    }

    reset(): void {
        this.cuebles = [];
    }

    generateCue(): GeneralCue {
        const result = new GeneralCue();
        result.cuebles = this.cuebles.map(x => x.clone(false));
        return result;
    }
}
