import { TestBed } from '@angular/core/testing';

import { PutLivreService } from './put-livre.service';

describe('PutLivreService', () => {
  let service: PutLivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutLivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
