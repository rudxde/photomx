import { ICueble } from '../interfaces/ICueble';
import { ICue } from '../interfaces/ICue';
import { CueList } from './CueList';
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

    shine(parentCue: ICue | null, parentCueList: CueList | null): void {
        let resultingCuble: ICueble;
        if (this.ignoreFade) {
            resultingCuble = this;
        } else {
            // Todo
            resultingCuble = this;
        }
        this.fixture.channels[this.channelIndex].value = resultingCuble;
    }

    reset(): void {
        if (this.fixture.channels[this.channelIndex].value == this) {
            this.fixture.channels[this.channelIndex].value = this.fixture.channels[this.channelIndex].default;
        }
    }

    isOverride(): boolean {
        return this.override;
    }

    clone(override = this.override): ICueble {
        return new ValueCueble(this.fixture, this.channelIndex, this.value, override);
    }

}
