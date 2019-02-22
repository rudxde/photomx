import { ICue } from '../interfaces/ICue';
import { ECueListState } from '../enumerations/CueListState';
import { CueTrigger } from '../enumerations/CueTrigger';
import { GlobalClockService } from '../services/globalclock/globalclock.service';

export class CueList {
    public cueSteps: ICue[];
    public name: string;
    public fadeOutTime: number;
    public overrides: boolean;
    public cycle: boolean;
    public random: boolean;
    public revert: boolean;
    public resetOnStop: boolean;

    public activeCueIndex: number;
    public state: ECueListState;



    constructor(
        private globalClockService: GlobalClockService,
    ) {
        this.state = ECueListState.STOPPED;
    }

    private get acutalCue(): ICue {
        return this.cueSteps[this.activeCueIndex];
    }

    private get nextCue(): ICue {
        return this.cueSteps[(this.activeCueIndex + 1) % this.cueSteps.length];
    }

    start(): void {
        this.state = ECueListState.RUNNING;
        this.triggerNextCue();
    }

    stop(): void {
        if (this.resetOnStop) {
            this.cueSteps.forEach(x => x.reset());
        }
        this.state = ECueListState.STOPPED;
    }

    pause(): void {
        this.state = ECueListState.PAUSED;
    }

    go(): void {
        if (this.nextCue.trigger === CueTrigger.Go) {
            this.triggerNextCue();
        }
    }

    beat(): void {
        if (this.nextCue.trigger === CueTrigger.Beat) {
            this.triggerNextCue();
        }
    }

    private triggerNextCue(): void {
        if (this.state !== ECueListState.RUNNING) {
            return;
        }
        this.activeCueIndex++;
        if (this.activeCueIndex >= this.cueSteps.length) {
            if (this.cycle) {
                this.activeCueIndex = 0;
            } else {
                this.stop();
            }
        }
        this.nextCue.shine();
        if (this.nextCue.trigger === CueTrigger.After) {
            this.globalClockService.after(this.triggerNextCue, this.nextCue.triggerImmediate);
        }
    }

}
