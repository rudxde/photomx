import { ICueble } from './ICueble';

export interface IFade {
    fade: (stateA: ICueble, stateB: ICueble, progress: number) => number;
}
