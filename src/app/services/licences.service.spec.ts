import { TestBed, inject } from '@angular/core/testing';

import { LicencesService } from './licences.service';

describe('LicencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LicencesService]
    });
  });

  it('should be created', inject([LicencesService], (service: LicencesService) => {
    expect(service).toBeTruthy();
  }));
});
