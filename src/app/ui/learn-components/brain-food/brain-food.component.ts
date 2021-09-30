import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBrain, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

const DEFAULT_ICON = faPuzzlePiece;

@Component({
  selector: 'app-brain-food',
  templateUrl: './brain-food.component.html',
  styleUrls: ['./brain-food.component.scss'],
})
export class BrainFoodComponent {
  @Input() icon: IconDefinition = DEFAULT_ICON;
}
