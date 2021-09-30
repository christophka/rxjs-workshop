import { Component } from '@angular/core';
import { ConsoleService } from 'src/app/ui/console/components/console/console.service';
import { steps } from './subjects.example';

@Component({
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
  providers: [ConsoleService],
})
export class SubjectsComponent {
  public steps = steps;
}
