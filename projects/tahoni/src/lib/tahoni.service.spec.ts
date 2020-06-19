import { TestBed } from '@angular/core/testing';

import { TahoniService } from './tahoni.service';

describe('TahoniService', () => {
  let service: TahoniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TahoniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
