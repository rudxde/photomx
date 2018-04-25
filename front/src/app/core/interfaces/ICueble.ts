import { IFixture } from './IFixture';
import { ICue } from './ICue';

export interface ICueble {
  fixture: IFixture;

  getValue(): number;
  shine(parentCue: ICue): void;
}
