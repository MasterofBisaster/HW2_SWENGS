import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuFormComponent } from './cpu-form.component';

describe('CpuFormComponent', () => {
  let component: CpuFormComponent;
  let fixture: ComponentFixture<CpuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
