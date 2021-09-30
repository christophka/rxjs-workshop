import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectStepComponent } from './subject.component';

describe('SubjectComponent', () => {
  let component: SubjectStepComponent;
  let fixture: ComponentFixture<SubjectStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectStepComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
