import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game1playerComponent } from './game1player.component';

describe('Game1playerComponent', () => {
  let component: Game1playerComponent;
  let fixture: ComponentFixture<Game1playerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Game1playerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Game1playerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
