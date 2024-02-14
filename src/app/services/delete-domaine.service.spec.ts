import { TestBed } from '@angular/core/testing';

import { DeleteDomaineService } from './delete-domaine.service';

describe('DeleteDomaineService', () => {
  let service: DeleteDomaineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteDomaineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
