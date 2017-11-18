import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacEntryOfPremiseDetailComponent } from './cac-entry-of-premise-detail.component';

describe('CacEntryOfPremiseDetailComponent', () => {
  let component: CacEntryOfPremiseDetailComponent;
  let fixture: ComponentFixture<CacEntryOfPremiseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacEntryOfPremiseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacEntryOfPremiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
