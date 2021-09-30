import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';
import { OperatorIntroStepComponent } from './steps/00-operator-intro-step/operator-intro-step.component';
import { SomeBasicOperatorsStepComponent } from './steps/01-some-basic-operators-step/some-basic-operators-step.component';
import { CountdownStepComponent } from './steps/02-countdown-step/countdown-step.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '00',
  },
  {
    path: '',
    component: OperatorsComponent,
    children: [
      {
        path: '00',
        component: OperatorIntroStepComponent,
      },
      {
        path: '01',
        component: SomeBasicOperatorsStepComponent,
      },
      {
        path: '02',
        component: CountdownStepComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorsRoutingModule {}
