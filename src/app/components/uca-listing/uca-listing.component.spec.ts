import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcaListingComponent } from './uca-listing.component';

describe('UcaListingComponent', () => {
  let component: UcaListingComponent;
  let fixture: ComponentFixture<UcaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
