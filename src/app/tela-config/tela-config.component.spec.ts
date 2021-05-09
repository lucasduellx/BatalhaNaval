import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaConfigComponent } from './tela-config.component';

describe('TelaConfigComponent', () => {
  let component: TelaConfigComponent;
  let fixture: ComponentFixture<TelaConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
