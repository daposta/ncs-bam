import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HqManageApplicationsComponent } from './hq-manage-applications.component';

describe('HqManageApplicationsComponent', () => {
  let component: HqManageApplicationsComponent;
  let fixture: ComponentFixture<HqManageApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HqManageApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HqManageApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
