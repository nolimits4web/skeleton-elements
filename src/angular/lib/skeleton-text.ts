import { Directive, Input } from '@angular/core';
import { SkeletonEffects } from './skeletonEffect';
@Directive({
  selector: '[skeleton-text]',
  host: {
    class: 'skeleton-text',
    '[class.skeleton-effect-fade]': 'effect === "fade"',
    '[class.skeleton-effect-pulse]': 'effect === "pulse"',
    '[class.skeleton-effect-wave]': 'effect === "blink" || effect === "wave"',
  },
})
export class SkeletonTextDirective {
  @Input() effect: SkeletonEffects;

  constructor() {}
}
