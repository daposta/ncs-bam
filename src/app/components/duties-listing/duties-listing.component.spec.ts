import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutiesListingComponent } from './duties-listing.component';

describe('DutiesListingComponent', () => {
  let component: DutiesListingComponent;
  let fixture: ComponentFixture<DutiesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutiesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutiesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
