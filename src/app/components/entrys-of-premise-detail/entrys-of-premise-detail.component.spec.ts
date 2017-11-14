import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrysOfPremiseDetailComponent } from './entrys-of-premise-detail.component';

describe('EntrysOfPremiseDetailComponent', () => {
  let component: EntrysOfPremiseDetailComponent;
  let fixture: ComponentFixture<EntrysOfPremiseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrysOfPremiseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrysOfPremiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
