import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcoAssignmentDetailComponent } from './oco-assignment-detail.component';

describe('OcoAssignmentDetailComponent', () => {
  let component: OcoAssignmentDetailComponent;
  let fixture: ComponentFixture<OcoAssignmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcoAssignmentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcoAssignmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
