import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OemFormComponent } from './oem-form.component';

describe('OemFormComponent', () => {
  let component: OemFormComponent;
  let fixture: ComponentFixture<OemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
