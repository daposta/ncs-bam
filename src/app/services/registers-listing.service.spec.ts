import { TestBed, inject } from '@angular/core/testing';

import { RegistersListingService } from './registers-listing.service';

describe('RegistersListingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistersListingService]
    });
  });

  it('should be created', inject([RegistersListingService], (service: RegistersListingService) => {
    expect(service).toBeTruthy();
  }));
});
