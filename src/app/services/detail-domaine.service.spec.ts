import { TestBed } from '@angular/core/testing';

import { DetailDomaineService } from './detail-domaine.service';

describe('DetailDomaineService', () => {
  let service: DetailDomaineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailDomaineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
