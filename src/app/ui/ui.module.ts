import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CkadButtonModule,
  CkadCardModule,
  CkadCardStackModule,
} from '@ckapp/angular-components';

import { SidebarModule } from './sidebar/sidebar.module';
import { ConsoleModule } from './console/console.module';
import { IconsModule } from './icons/icons.module';
import { ExampleComponentsModule } from './example-components/example-components.module';
import { LearnComponentsModule } from './learn-components/learn-components.module';

@NgModule({
  declarations: [],
  exports: [
    ConsoleModule,
    IconsModule,
    SidebarModule,
    ExampleComponentsModule,
    LearnComponentsModule,
    // we're also exporting external modules for easy use
    CkadButtonModule,
    CkadCardModule,
    CkadCardStackModule,
  ],
  imports: [CommonModule],
})
export class UiModule {}
