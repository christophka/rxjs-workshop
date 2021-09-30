import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledExamplePageComponent } from './filled-example-page.component';

describe('FilledExamplePageComponent', () => {
  let component: FilledExamplePageComponent;
  let fixture: ComponentFixture<FilledExamplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilledExamplePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
