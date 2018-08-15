import { IFixture } from './IFixture';
import { ICue } from './ICue';
import { CueList } from '../library/cueList';

export interface ICueble {
  fixture: IFixture;
  channelIndex: number;
  ignoreFade: boolean;

  getValue(): number;
  shine(parentCue: ICue, parentCueList: CueList): void;
  isOverride(): boolean;
  clone(override?: boolean): ICueble;
}
