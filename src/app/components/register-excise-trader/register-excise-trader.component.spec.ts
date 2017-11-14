import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterExciseTraderComponent } from './register-excise-trader.component';

describe('RegisterExciseTraderComponent', () => {
  let component: RegisterExciseTraderComponent;
  let fixture: ComponentFixture<RegisterExciseTraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterExciseTraderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterExciseTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
