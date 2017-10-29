import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForm41Component } from './new-form-41.component';

describe('NewForm41Component', () => {
  let component: NewForm41Component;
  let fixture: ComponentFixture<NewForm41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewForm41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForm41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
