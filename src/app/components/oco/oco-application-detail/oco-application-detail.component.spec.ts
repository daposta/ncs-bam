import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcoApplicationDetailComponent } from './oco-application-detail.component';

describe('OcoApplicationDetailComponent', () => {
  let component: OcoApplicationDetailComponent;
  let fixture: ComponentFixture<OcoApplicationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcoApplicationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcoApplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
