import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeHomworkComponent } from './time-homwork.component';

describe('TimeHomworkComponent', () => {
  let component: TimeHomworkComponent;
  let fixture: ComponentFixture<TimeHomworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeHomworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeHomworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
