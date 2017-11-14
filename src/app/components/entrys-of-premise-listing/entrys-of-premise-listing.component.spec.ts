import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrysOfPremiseListingComponent } from './entrys-of-premise-listing.component';

describe('EntrysOfPremiseListingComponent', () => {
  let component: EntrysOfPremiseListingComponent;
  let fixture: ComponentFixture<EntrysOfPremiseListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrysOfPremiseListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrysOfPremiseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
