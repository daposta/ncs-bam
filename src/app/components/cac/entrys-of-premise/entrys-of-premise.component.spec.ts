import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrysOfPremiseComponent } from './entrys-of-premise.component';

describe('EntrysOfPremiseComponent', () => {
  let component: EntrysOfPremiseComponent;
  let fixture: ComponentFixture<EntrysOfPremiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrysOfPremiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrysOfPremiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
