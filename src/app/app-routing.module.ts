import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { ExampleOverviewComponent } from './pages/example-overview/example-overview.component';
import { FilledExamplePageComponent } from './pages/filled-example-page/filled-example-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: ExampleOverviewComponent,
  },
  {
    path: 'example',
    component: FilledExamplePageComponent,
    children: [
      {
        path: '01-observables',
        loadChildren: () =>
          import('./examples/01-observables/observables.module').then(
            (m) => m.ObservablesModule
          ),
      },
      {
        path: '02-operators',
        loadChildren: () =>
          import('./examples/02-operators/operators.module').then(
            (m) => m.OperatorsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
