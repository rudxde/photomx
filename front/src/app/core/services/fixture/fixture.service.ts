import { Injectable } from '@angular/core';
import { IFixture } from '../../interfaces/IFixture';

@Injectable()
export class FixtureService {
    fixtures: IFixture[];

    constructor() {
        this.fixtures = [];
    }
    tick(): void {
        for (const fixture of this.fixtures) {
            fixture.tick();
        }
    }

    addFixture(fixture: IFixture) {
        this.fixtures.push(fixture);
    }
}
