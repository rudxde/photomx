import { IFixture } from './IFixture';
import { ICue } from './ICue';

export interface ICueble {
  fixture: IFixture;
  cue: ICue;

  getValue(): number;
  // shine(cue: ICue, cueList: CueList): ICueble;
}
