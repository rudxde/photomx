import { CueList } from '../library/cueList';
import { CueTrigger } from '../enumerations/CueTrigger';

export interface ICue {
    faderValue: any;
    trigger: CueTrigger[];
    triggerImmediate: number;
    await: boolean;
    cueList: CueList;
    shine: () => void;
}
