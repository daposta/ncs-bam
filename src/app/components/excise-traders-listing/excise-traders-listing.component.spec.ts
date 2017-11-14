import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExciseTradersListingComponent } from './excise-traders-listing.component';

describe('ExciseTradersListingComponent', () => {
  let component: ExciseTradersListingComponent;
  let fixture: ComponentFixture<ExciseTradersListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExciseTradersListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExciseTradersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
