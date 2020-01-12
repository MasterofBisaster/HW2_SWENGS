import { TestBed } from '@angular/core/testing';

import { MemoryTypeService } from './memory-type.service';

describe('MemoryTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoryTypeService = TestBed.get(MemoryTypeService);
    expect(service).toBeTruthy();
  });
});
