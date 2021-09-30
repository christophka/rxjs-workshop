import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionStepComponent } from './subscription.component';

describe('SubscriptionComponent', () => {
  let component: SubscriptionStepComponent;
  let fixture: ComponentFixture<SubscriptionStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionStepComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
