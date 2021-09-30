import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectApplicationStepComponent } from './subject-application.component';

describe('SubjectApplicationComponent', () => {
  let component: SubjectApplicationStepComponent;
  let fixture: ComponentFixture<SubjectApplicationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectApplicationStepComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectApplicationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
