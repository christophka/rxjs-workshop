import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOverviewComponent } from './example-overview.component';

describe('ExampleOverviewComponent', () => {
  let component: ExampleOverviewComponent;
  let fixture: ComponentFixture<ExampleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
