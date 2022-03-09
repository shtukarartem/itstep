import { TestBed } from '@angular/core/testing';

import { TwterrrService } from './twterrr.service';

describe('TwterrrService', () => {
  let service: TwterrrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwterrrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
