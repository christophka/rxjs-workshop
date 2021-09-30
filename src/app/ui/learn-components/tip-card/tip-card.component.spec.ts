import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipCardComponent } from './tip-card.component';

describe('TipCardComponent', () => {
  let component: TipCardComponent;
  let fixture: ComponentFixture<TipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
