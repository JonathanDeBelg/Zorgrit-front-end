import { TestBed } from '@angular/core/testing';

import { CareInstitutionService } from './care-institution.service';

describe('CareInstitutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CareInstitutionService = TestBed.get(CareInstitutionService);
    expect(service).toBeTruthy();
  });
});
