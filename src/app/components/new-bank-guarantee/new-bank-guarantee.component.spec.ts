import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBankGuaranteeComponent } from './new-bank-guarantee.component';

describe('NewBankGuaranteeComponent', () => {
  let component: NewBankGuaranteeComponent;
  let fixture: ComponentFixture<NewBankGuaranteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBankGuaranteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBankGuaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
