import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacEntrysOfPremiseComponent } from './cac-entrys-of-premise.component';

describe('CacEntrysOfPremiseComponent', () => {
  let component: CacEntrysOfPremiseComponent;
  let fixture: ComponentFixture<CacEntrysOfPremiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacEntrysOfPremiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacEntrysOfPremiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
