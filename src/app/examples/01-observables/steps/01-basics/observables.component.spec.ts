import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableStepBasicsComponent } from './observables.component';

describe('ObservablesComponent', () => {
  let component: ObservableStepBasicsComponent;
  let fixture: ComponentFixture<ObservableStepBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservableStepBasicsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableStepBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
