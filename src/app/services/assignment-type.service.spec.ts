import { TestBed, inject } from '@angular/core/testing';

import { AssignmentTypeService } from './assignment-type.service';

describe('AssignmentTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignmentTypeService]
    });
  });

  it('should be created', inject([AssignmentTypeService], (service: AssignmentTypeService) => {
    expect(service).toBeTruthy();
  }));
});
