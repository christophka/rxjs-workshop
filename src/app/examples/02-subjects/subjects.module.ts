import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from 'src/app/ui/ui.module';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { SubjectStepComponent } from './steps/00-subject/subject.component';
import { SubjectApplicationStepComponent } from './steps/03-subject-application/subject-application.component';
import { BehaviorSubjectComponent } from './steps/01-behavior-subject/behavior-subject.component';
import { ReplaySubjectStepComponent } from './steps/02-replay-subject/replay-subject.component';

@NgModule({
  declarations: [
    SubjectsComponent,
    SubjectStepComponent,
    SubjectApplicationStepComponent,
    BehaviorSubjectComponent,
    ReplaySubjectStepComponent,
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SubjectsModule {}
