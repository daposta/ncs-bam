import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersListingComponent } from './registers-listing.component';

describe('RegistersListingComponent', () => {
  let component: RegistersListingComponent;
  let fixture: ComponentFixture<RegistersListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistersListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
