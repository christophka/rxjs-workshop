import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownStepComponent } from './countdown-step.component';

describe('CountdownStepComponent', () => {
  let component: CountdownStepComponent;
  let fixture: ComponentFixture<CountdownStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountdownStepComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
