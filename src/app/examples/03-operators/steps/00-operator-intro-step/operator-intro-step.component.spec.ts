import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorIntroStepComponent } from './operator-intro-step.component';

describe('OperatorIntroStepComponent', () => {
  let component: OperatorIntroStepComponent;
  let fixture: ComponentFixture<OperatorIntroStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorIntroStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorIntroStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
