import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionalApprovalComponent } from './provisional-approval.component';

describe('ProvisionalApprovalComponent', () => {
  let component: ProvisionalApprovalComponent;
  let fixture: ComponentFixture<ProvisionalApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionalApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionalApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
