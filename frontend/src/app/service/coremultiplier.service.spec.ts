import { TestBed } from '@angular/core/testing';

import { CoremultiplierService } from './coremultiplier.service';

describe('CoremultiplierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoremultiplierService = TestBed.get(CoremultiplierService);
    expect(service).toBeTruthy();
  });
});
