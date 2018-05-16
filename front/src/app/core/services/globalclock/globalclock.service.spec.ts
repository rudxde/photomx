import { TestBed, inject } from '@angular/core/testing';

import { GlobalclockserviceService } from './globalclockservice.service';

describe('GlobalclockserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalclockserviceService]
    });
  });

  it('should be created', inject([GlobalclockserviceService], (service: GlobalclockserviceService) => {
    expect(service).toBeTruthy();
  }));
});
