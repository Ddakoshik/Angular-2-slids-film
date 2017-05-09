import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homwork5Component } from './homwork-5.component';

describe('Homwork5Component', () => {
  let component: Homwork5Component;
  let fixture: ComponentFixture<Homwork5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homwork5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homwork5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
