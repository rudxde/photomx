import { ICue } from '../interfaces/ICue';
import { CueTrigger } from '../enumerations/CueTrigger';
import { ICueble } from '../interfaces/ICueble';
import { IFade } from '../interfaces/IFade';
import { CueList } from './cueList';

export class GeneralCue implements ICue{
    faderValue: any;
    trigger: CueTrigger[];
    triggerImmediate: number;
    await: boolean;
    cueList: CueList;
    cuebles: ICueble[];
    fade: IFade;

    shine(): void {

    }
}
