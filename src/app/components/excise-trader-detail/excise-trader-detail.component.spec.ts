import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExciseTraderDetailComponent } from './excise-trader-detail.component';

describe('ExciseTraderDetailComponent', () => {
  let component: ExciseTraderDetailComponent;
  let fixture: ComponentFixture<ExciseTraderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExciseTraderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExciseTraderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
