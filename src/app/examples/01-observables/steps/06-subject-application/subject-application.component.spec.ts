import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectStepApplicationComponent } from './subject-application.component';

describe('SubjectApplicationComponent', () => {
  let component: SubjectStepApplicationComponent;
  let fixture: ComponentFixture<SubjectStepApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectStepApplicationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectStepApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
