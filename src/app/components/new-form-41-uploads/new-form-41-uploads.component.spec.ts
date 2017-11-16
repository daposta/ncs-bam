import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForm41UploadsComponent } from './new-form-41-uploads.component';

describe('NewForm41UploadsComponent', () => {
  let component: NewForm41UploadsComponent;
  let fixture: ComponentFixture<NewForm41UploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewForm41UploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForm41UploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
