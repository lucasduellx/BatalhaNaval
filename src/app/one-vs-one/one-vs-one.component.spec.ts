import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneVsOneComponent } from './one-vs-one.component';

describe('OneVsOneComponent', () => {
  let component: OneVsOneComponent;
  let fixture: ComponentFixture<OneVsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneVsOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneVsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
