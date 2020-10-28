import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
export type SkeletonEffects = 'fade' | 'pulse' | 'blink';
@Component({
  selector: 'skeleton-block',
  templateUrl: './skeleton-block.component.html',
  styleUrls: ['./skeleton-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'skeleton-block',
    '[class.skeleton-effect-fade]': 'effect === "fade"',
    '[class.skeleton-effect-pulse]': 'effect === "pulse"',
    '[class.skeleton-effect-blink]': 'effect === "blink"',
    '[style.width.px]': 'width',
    '[style.height.px]': 'height',
  },
})
export class SkeletonBlockComponent {
  @Input() width: number;
  @Input() height: number;
  @Input() effect: SkeletonEffects;

  skeletonClassName: string;

  constructor() {}
}
