import { TestBed, inject } from '@angular/core/testing';

import { Form41sService } from './form41s.service';

describe('Form41sService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Form41sService]
    });
  });

  it('should be created', inject([Form41sService], (service: Form41sService) => {
    expect(service).toBeTruthy();
  }));
});
