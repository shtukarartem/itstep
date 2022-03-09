import { TestBed } from '@angular/core/testing';

import { BlogsvService } from './blogsv.service';

describe('BlogsvService', () => {
  let service: BlogsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
