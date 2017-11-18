import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HqApplicationDetailComponent } from './hq-application-detail.component';

describe('HqApplicationDetailComponent', () => {
  let component: HqApplicationDetailComponent;
  let fixture: ComponentFixture<HqApplicationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HqApplicationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HqApplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
