import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionalReportComponent } from './provisional-report.component';

describe('ProvisionalReportComponent', () => {
  let component: ProvisionalReportComponent;
  let fixture: ComponentFixture<ProvisionalReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionalReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
