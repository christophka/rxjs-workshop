import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Modules
import { UiModule } from 'src/app/ui/ui.module';
import { ObservablesRoutingModule } from './observables-routing.module';
// Components
import { ObservablesComponent } from './observables.component';
import { IntroComponent } from './steps/00-intro/intro.component';
import { ObservableStepBasicsComponent } from './steps/01-basics/observables.component';
import { ObservableStepAsyncComponent } from './steps/04-async/async-observables.component';
import { ObserverStepComponent } from './steps/02-observer/observer.component';
import { SubscriptionStepComponent } from './steps/03-subscription/subscription.component';

@NgModule({
  declarations: [
    ObservablesComponent,
    ObservableStepBasicsComponent,
    ObservableStepAsyncComponent,
    IntroComponent,
    ObserverStepComponent,
    SubscriptionStepComponent,
  ],
  imports: [CommonModule, ObservablesRoutingModule, UiModule],
})
export class ObservablesModule {}
