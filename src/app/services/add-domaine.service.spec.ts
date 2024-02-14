import { TestBed } from '@angular/core/testing';

import { AddDomaineService } from './add-domaine.service';

describe('AddDomaineService', () => {
  let service: AddDomaineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDomaineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
