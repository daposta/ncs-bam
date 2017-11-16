import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonesListingComponent } from './zones-listing.component';

describe('ZonesListingComponent', () => {
  let component: ZonesListingComponent;
  let fixture: ComponentFixture<ZonesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
