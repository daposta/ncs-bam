import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcgManageLicencesComponent } from './dcg-manage-licences.component';

describe('DcgManageLicencesComponent', () => {
  let component: DcgManageLicencesComponent;
  let fixture: ComponentFixture<DcgManageLicencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcgManageLicencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcgManageLicencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
