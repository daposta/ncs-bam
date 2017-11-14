import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsAdminComponent } from './register-as-admin.component';

describe('RegisterAsAdminComponent', () => {
  let component: RegisterAsAdminComponent;
  let fixture: ComponentFixture<RegisterAsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
