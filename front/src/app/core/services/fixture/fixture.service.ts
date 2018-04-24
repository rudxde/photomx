import { Injectable } from '@angular/core';
import { IFixture } from '../../interfaces/IFixture';

@Injectable()
export class FixtureService {
  fixtures: IFixture[];

  constructor() { }
  tick(): void {
    // TODO
  }
}
