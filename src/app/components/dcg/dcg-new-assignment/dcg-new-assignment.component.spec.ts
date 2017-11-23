import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcgNewAssignmentComponent } from './dcg-new-assignment.component';

describe('DcgNewAssignmentComponent', () => {
  let component: DcgNewAssignmentComponent;
  let fixture: ComponentFixture<DcgNewAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcgNewAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcgNewAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
