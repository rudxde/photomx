import { ICueble } from '../interfaces/ICueble';
import { ICue } from '../interfaces/ICue';
import { CueList } from './cueList';
import { FixtureService } from '../services/fixture/fixture.service';
import { IFixture } from '../interfaces/IFixture';

export class ValueCueble implements ICueble {
    ignoreFade: boolean;
    constructor(
        public fixture: IFixture,
        public channelIndex: number,
        private value: number,
        private override: boolean,
    ) { }
    getValue(): number {
        return this.value;
    }

    shine(parentCue: ICue, parentCueList: CueList): void {
        let resultingCuble: ICueble;
        if (this.ignoreFade) {
            resultingCuble = this;
        } else {
            // Todo
            resultingCuble = this;
        }
        console.log(this.fixture.channels);
        this.fixture.channels[this.channelIndex].value = resultingCuble;
    }

    isOverride(): boolean {
        return this.override;
    }

    clone(override = this.override): ICueble {
        return new ValueCueble(this.fixture, this.channelIndex, this.value, override);
    }


}
