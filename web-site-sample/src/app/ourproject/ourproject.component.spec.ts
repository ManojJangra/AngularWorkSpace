import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurprojectComponent } from './ourproject.component';

describe('OurprojectComponent', () => {
  let component: OurprojectComponent;
  let fixture: ComponentFixture<OurprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
