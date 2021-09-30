import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectStepComponent } from './replay-subject.component';

describe('ReplaySubjectComponent', () => {
  let component: ReplaySubjectStepComponent;
  let fixture: ComponentFixture<ReplaySubjectStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReplaySubjectStepComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaySubjectStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
