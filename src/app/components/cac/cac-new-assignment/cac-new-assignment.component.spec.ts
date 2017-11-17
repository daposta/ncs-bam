import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacNewAssignmentComponent } from './cac-new-assignment.component';

describe('CacNewAssignmentComponent', () => {
  let component: CacNewAssignmentComponent;
  let fixture: ComponentFixture<CacNewAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacNewAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacNewAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
