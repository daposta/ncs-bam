import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencesListingComponent } from './licences-listing.component';

describe('LicencesListingComponent', () => {
  let component: LicencesListingComponent;
  let fixture: ComponentFixture<LicencesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicencesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicencesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
