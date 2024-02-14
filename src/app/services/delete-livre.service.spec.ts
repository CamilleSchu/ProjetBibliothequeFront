import { TestBed } from '@angular/core/testing';

import { DeleteLivreService } from './delete-livre.service';

describe('DeleteLivreService', () => {
  let service: DeleteLivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteLivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
