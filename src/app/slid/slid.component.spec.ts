import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidComponent } from './slid.component';

describe('SlidComponent', () => {
  let component: SlidComponent;
  let fixture: ComponentFixture<SlidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
