import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacAssignmentsListingComponent } from './cac-assignments-listing.component';

describe('CacAssignmentsListingComponent', () => {
  let component: CacAssignmentsListingComponent;
  let fixture: ComponentFixture<CacAssignmentsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacAssignmentsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacAssignmentsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
