import { TestBed } from '@angular/core/testing';

import { DeleteAuteurService } from './delete-auteur.service';

describe('DeleteAuteurService', () => {
  let service: DeleteAuteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteAuteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
