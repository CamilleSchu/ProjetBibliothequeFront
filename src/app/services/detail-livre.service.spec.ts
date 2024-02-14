import { TestBed } from '@angular/core/testing';

import { DetailLivreService } from './detail-livre.service';

describe('DetailLivreService', () => {
  let service: DetailLivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailLivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
