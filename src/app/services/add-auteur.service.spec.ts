import { TestBed } from '@angular/core/testing';

import { AddAuteurService } from './add-auteur.service';

describe('AddAuteurService', () => {
  let service: AddAuteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAuteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
