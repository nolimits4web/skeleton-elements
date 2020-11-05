import { Component, Input } from '@angular/core';
import { SkeletonEffects } from './skeletonEffect';
@Component({
  selector: 'skeleton-block',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'skeleton-block',
    '[class.skeleton-effect-fade]': 'effect === "fade"',
    '[class.skeleton-effect-pulse]': 'effect === "pulse"',
    '[class.skeleton-effect-wave]': 'effect === "blink" || effect === "wave"',
    '[style.width]': 'width',
    '[style.height]': 'height',
  },
})
export class SkeletonBlockComponent {
  @Input() width: string;
  @Input() height: string;
  @Input() effect: SkeletonEffects;
}
