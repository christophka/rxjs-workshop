import { Component } from '@angular/core';
import { ConsoleService } from 'src/app/ui/console/components/console/console.service';
import { steps } from './observable.example';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
  providers: [ConsoleService],
})
export class ObservablesComponent {
  public steps = steps;
}
