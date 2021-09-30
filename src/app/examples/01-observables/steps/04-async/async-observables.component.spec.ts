import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableStepAsyncComponent } from './async-observables.component';

describe('AsyncObservablesComponent', () => {
  let component: ObservableStepAsyncComponent;
  let fixture: ComponentFixture<ObservableStepAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservableStepAsyncComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableStepAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
