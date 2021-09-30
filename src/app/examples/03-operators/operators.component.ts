import { Component } from '@angular/core';
import { ConsoleService } from 'src/app/ui/console/components/console/console.service';
import { steps } from './operators.example';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
  providers: [ConsoleService],
})
export class OperatorsComponent {
  public steps = steps;
}
