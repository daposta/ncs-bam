import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcoManageApplicationsComponent } from './oco-manage-applications.component';

describe('OcoManageApplicationsComponent', () => {
  let component: OcoManageApplicationsComponent;
  let fixture: ComponentFixture<OcoManageApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcoManageApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcoManageApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
