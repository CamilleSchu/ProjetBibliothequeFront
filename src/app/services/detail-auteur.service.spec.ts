import { TestBed } from '@angular/core/testing';

import { DetailAuteurService } from './detail-auteur.service';

describe('DetailAuteurService', () => {
  let service: DetailAuteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailAuteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
