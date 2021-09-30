import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectStepComponent } from './steps/00-subject/subject.component';
import { SubjectApplicationStepComponent } from './steps/03-subject-application/subject-application.component';
import { BehaviorSubjectComponent } from './steps/01-behavior-subject/behavior-subject.component';
import { SubjectsComponent } from './subjects.component';
import { ReplaySubjectStepComponent } from './steps/02-replay-subject/replay-subject.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '00',
  },
  {
    path: '',
    component: SubjectsComponent,

    children: [
      {
        path: '00',
        component: SubjectStepComponent,
      },
      {
        path: '01',
        component: BehaviorSubjectComponent,
      },
      {
        path: '02',
        component: ReplaySubjectStepComponent,
      },
      {
        path: '03',
        component: SubjectApplicationStepComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectsRoutingModule {}
