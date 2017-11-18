import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcgApplicationDetailComponent } from './dcg-application-detail.component';

describe('DcgApplicationDetailComponent', () => {
  let component: DcgApplicationDetailComponent;
  let fixture: ComponentFixture<DcgApplicationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcgApplicationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcgApplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
