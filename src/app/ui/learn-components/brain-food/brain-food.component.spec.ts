import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainFoodComponent } from './brain-food.component';

describe('BrainFoodComponent', () => {
  let component: BrainFoodComponent;
  let fixture: ComponentFixture<BrainFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
