import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tip-card',
  templateUrl: './tip-card.component.html',
  styleUrls: ['./tip-card.component.scss'],
})
export class TipCardComponent {
  @Input() icon: IconDefinition = faLightbulb;
  @Input() iconColor: string = 'success';
  @Input() color: string = 'neutral-lighter';

  public get frontClasses() {
    return {
      [`bg-${this.color}`]: true,
    };
  }

  public get backClasses() {
    return {
      [`bg-${this.iconColor}`]: true,
    };
  }
}
