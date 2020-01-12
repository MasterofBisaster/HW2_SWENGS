import { TestBed } from '@angular/core/testing';

import { OemService } from './oem.service';

describe('OemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OemService = TestBed.get(OemService);
    expect(service).toBeTruthy();
  });
});
