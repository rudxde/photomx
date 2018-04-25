import { Injectable } from '@angular/core';
import { IFixture } from '../../interfaces/IFixture';

@Injectable()
export class FixtureService {
  fixtures: IFixture[];

  constructor() { }
  tick(): void {
    for (let fixture of this.fixtures) {
      fixture.tick();
    }
  }
}
