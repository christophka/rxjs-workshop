import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeBasicOperatorsStepComponent } from './some-basic-operators-step.component';

describe('SomeBasicOperatorsStepComponent', () => {
  let component: SomeBasicOperatorsStepComponent;
  let fixture: ComponentFixture<SomeBasicOperatorsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeBasicOperatorsStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeBasicOperatorsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
