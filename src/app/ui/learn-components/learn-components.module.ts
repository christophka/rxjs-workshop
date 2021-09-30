import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkadCardModule, CkadCardStackModule } from '@ckapp/angular-components';

import { IconsModule } from '../icons/icons.module';
// Components
import { BrainFoodComponent } from '../learn-components/brain-food/brain-food.component';
import { BrainFoodCaptionComponent } from '../learn-components/brain-food-caption/brain-food-caption.component';
import { TipCardComponent } from '../learn-components/tip-card/tip-card.component';

@NgModule({
  declarations: [
    BrainFoodComponent,
    BrainFoodCaptionComponent,
    TipCardComponent,
  ],
  exports: [BrainFoodComponent, BrainFoodCaptionComponent, TipCardComponent],
  imports: [CommonModule, IconsModule, CkadCardModule, CkadCardStackModule],
})
export class LearnComponentsModule {}
