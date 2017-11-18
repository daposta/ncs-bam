import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcgManageApplicationsComponent } from './dcg-manage-applications.component';

describe('DcgManageApplicationsComponent', () => {
  let component: DcgManageApplicationsComponent;
  let fixture: ComponentFixture<DcgManageApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcgManageApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcgManageApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
