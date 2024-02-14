import { TestBed } from '@angular/core/testing';

import { PutDomaineService } from './put-domaine.service';

describe('PutDomaineService', () => {
  let service: PutDomaineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutDomaineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
