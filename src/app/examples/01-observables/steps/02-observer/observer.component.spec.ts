import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverStepComponent } from './observer.component';

describe('ObserverComponent', () => {
  let component: ObserverStepComponent;
  let fixture: ComponentFixture<ObserverStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObserverStepComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
