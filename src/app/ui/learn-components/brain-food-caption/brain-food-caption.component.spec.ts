import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainFoodCaptionComponent } from './brain-food-caption.component';

describe('BrainFoodCaptionComponent', () => {
  let component: BrainFoodCaptionComponent;
  let fixture: ComponentFixture<BrainFoodCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainFoodCaptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainFoodCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
