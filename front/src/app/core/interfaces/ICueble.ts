import { IFixture } from './IFixture';
import { ICue } from './ICue';
import { CueList } from '../library/CueList';

export interface ICueble {
    fixture: IFixture;
    channelIndex: number;
    ignoreFade: boolean;

    getValue(): number;
    shine(parentCue: ICue, parentCueList: CueList): void;
    reset(): void;
    /**
     *
     * A Cueble, which is active in the programmer should override the active values.
     *
     * @returns boolean
     */
    isOverride(): boolean;
    clone(override?: boolean): ICueble;
}
