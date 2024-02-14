import { TestBed } from '@angular/core/testing';

import { PutAuteurService } from './put-auteur.service';

describe('PutAuteurService', () => {
  let service: PutAuteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutAuteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
