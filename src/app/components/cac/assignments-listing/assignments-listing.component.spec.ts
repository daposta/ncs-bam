import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsListingComponent } from './assignments-listing.component';

describe('AssignmentsListingComponent', () => {
  let component: AssignmentsListingComponent;
  let fixture: ComponentFixture<AssignmentsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
