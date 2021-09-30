import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CkadButtonModule } from '@ckapp/angular-components';

// Components
import { ConsoleComponent } from './components/console/console.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [ConsoleComponent],
  exports: [ConsoleComponent],
  imports: [CommonModule, IconsModule, CkadButtonModule],
})
export class ConsoleModule {}
