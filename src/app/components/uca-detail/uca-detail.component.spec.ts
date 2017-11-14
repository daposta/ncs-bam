import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcaDetailComponent } from './uca-detail.component';

describe('UcaDetailComponent', () => {
  let component: UcaDetailComponent;
  let fixture: ComponentFixture<UcaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
