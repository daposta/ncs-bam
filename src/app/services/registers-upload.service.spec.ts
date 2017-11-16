import { TestBed, inject } from '@angular/core/testing';

import { RegistersUploadService } from './registers-upload.service';

describe('RegistersUploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistersUploadService]
    });
  });

  it('should be created', inject([RegistersUploadService], (service: RegistersUploadService) => {
    expect(service).toBeTruthy();
  }));
});
