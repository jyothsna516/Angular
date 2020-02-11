import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo33Component } from './demo33.component';

describe('Demo33Component', () => {
  let component: Demo33Component;
  let fixture: ComponentFixture<Demo33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
