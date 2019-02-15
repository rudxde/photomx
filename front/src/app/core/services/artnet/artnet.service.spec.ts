import { TestBed, inject } from '@angular/core/testing';

import { ArtnetService } from './artnet.service';

describe('ArtnetService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ArtnetService]
        });
    });

    it('should be created', inject([ArtnetService], (service: ArtnetService) => {
        expect(service).toBeTruthy();
    }));
});
