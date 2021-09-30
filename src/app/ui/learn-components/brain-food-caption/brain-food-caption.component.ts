import { Component } from '@angular/core';

@Component({
  selector: 'app-brain-food-caption, figcaption[app-brain-food-caption]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./brain-food-caption.component.scss'],
})
export class BrainFoodCaptionComponent {
  constructor() {}
}
