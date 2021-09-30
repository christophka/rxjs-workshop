import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './observables.component';
import { IntroComponent } from './steps/00-intro/intro.component';
import { ObservableStepBasicsComponent } from './steps/01-basics/observables.component';
import { ObserverStepComponent } from './steps/02-observer/observer.component';
import { SubscriptionStepComponent } from './steps/03-subscription/subscription.component';
import { ObservableStepAsyncComponent } from './steps/04-async/async-observables.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '00',
  },
  {
    path: '',
    component: ObservablesComponent,

    children: [
      {
        path: '00',
        component: IntroComponent,
      },
      {
        path: '01',
        component: ObservableStepBasicsComponent,
      },
      {
        path: '02',
        component: ObserverStepComponent,
      },
      {
        path: '03',
        component: SubscriptionStepComponent,
      },
      {
        path: '04',
        component: ObservableStepAsyncComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservablesRoutingModule {}
