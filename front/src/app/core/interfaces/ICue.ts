import { CueList } from '../library/CueList';
import { CueTrigger } from '../enumerations/CueTrigger';
import { IGlobalObject } from './global-object';

export interface ICue extends IGlobalObject {
    type: 'cue';
    faderValue: any;
    trigger: CueTrigger;
    triggerImmediate: number;
    await: boolean;
    cueList: CueList;
    shine: () => void;
    reset: () => void;
}
