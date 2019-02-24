import { TestBed } from '@angular/core/testing';

import { GlobalObjectsService } from './global-objects.service';

describe('GlobalObjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalObjectsService = TestBed.get(GlobalObjectsService);
    expect(service).toBeTruthy();
  });
});
