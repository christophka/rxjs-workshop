import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from 'src/app/ui/ui.module';
import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';
import { OperatorIntroStepComponent } from './steps/00-operator-intro-step/operator-intro-step.component';
import { CountdownStepComponent } from './steps/02-countdown-step/countdown-step.component';
import { SomeBasicOperatorsStepComponent } from './steps/01-some-basic-operators-step/some-basic-operators-step.component';

@NgModule({
  declarations: [
    OperatorsComponent,
    OperatorIntroStepComponent,
    CountdownStepComponent,
    SomeBasicOperatorsStepComponent,
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class OperatorsModule {}
