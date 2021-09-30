import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarModule } from '../sidebar/sidebar.module';
import { ConsoleModule } from '../console/console.module';
import { IconsModule } from '../icons/icons.module';

// Components
import { ExampleWrapperComponent } from './example-wrapper/example-wrapper.component';

@NgModule({
  declarations: [ExampleWrapperComponent],
  exports: [ExampleWrapperComponent],
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    ConsoleModule,
    IconsModule,
  ],
})
export class ExampleComponentsModule {}
