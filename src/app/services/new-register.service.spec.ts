import { TestBed, inject } from '@angular/core/testing';

import { NewRegisterService } from './new-register.service';

describe('NewRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewRegisterService]
    });
  });

  it('should be created', inject([NewRegisterService], (service: NewRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
