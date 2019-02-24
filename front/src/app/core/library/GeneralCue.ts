import { ICue } from '../interfaces/ICue';
import { CueTrigger } from '../enumerations/CueTrigger';
import { ICueble } from '../interfaces/ICueble';
import { IFade } from '../interfaces/IFade';
import { CueList } from './CueList';
import { GlobalObjectsService } from '../services/global-objects/global-objects.service';

export class GeneralCue implements ICue {
    gid: string;
    type: 'cue' = 'cue';
    faderValue: any;
    trigger: CueTrigger;
    triggerImmediate: number;
    await: boolean;
    cueList: CueList;
    cuebles: ICueble[];
    fade: IFade;

    constructor(
        private globalObjectService: GlobalObjectsService,
    ) {
        globalObjectService.addNew(this);
    }

    shine(): void {
        this.cuebles.forEach(x => x.shine(this, this.cueList));
    }

    reset(): void {
        this.cuebles.forEach(x => x.reset());
    }
}
