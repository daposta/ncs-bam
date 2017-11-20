import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcgPaymentsListingComponent } from './dcg-payments-listing.component';

describe('DcgPaymentsListingComponent', () => {
  let component: DcgPaymentsListingComponent;
  let fixture: ComponentFixture<DcgPaymentsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcgPaymentsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcgPaymentsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
