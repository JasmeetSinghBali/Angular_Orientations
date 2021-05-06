import { TestBed } from '@angular/core/testing';

import { ApiowService } from './apiow.service';

describe('ApiowService', () => {
  let service: ApiowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
