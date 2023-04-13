import { TestBed } from '@angular/core/testing';

import { OffspringService } from './offspring.service';

describe('OffspringService', () => {
  let service: OffspringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffspringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
