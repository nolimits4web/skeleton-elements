import { Component, Input } from '@angular/core';
import { SkeletonEffects } from './skeletonEffect';
import { multiplySvgPointsService } from './multiply-svg-points';
@Component({
  selector: 'skeleton-avatar',
  host: {
    class: 'skeleton-avatar',
    '[class.skeleton-effect-fade]': 'effect === "fade"',
    '[class.skeleton-effect-pulse]': 'effect === "pulse"',
    '[class.skeleton-effect-wave]': 'effect === "blink" || effect === "wave"',
  },
  template: `<svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size"
      [attr.height]="size"
      [attr.viewBox]="'0 0 ' + size + ' ' + size"
      preserveAspectRatio="none"
    >
      <rect
        [attr.width]="size"
        [attr.height]="size"
        fillRule="evenodd"
        [style.fill]="color"
        [attr.rx]="borderRadius"
      />
      <path
        *ngIf="showIcon"
        [style.fill]="iconColor"
        [attr.d]="
          multiplyPoints(
            'M28.22461,27.1590817 C34.9209931,27.1590817 40.6829044,21.1791004 40.6829044,13.3926332 C40.6829044,5.69958662 34.8898972,0 28.22461,0 C21.5594557,0 15.7663156,5.82423601 15.7663156,13.4549579 C15.7663156,21.1791004 21.5594557,27.1590817 28.22461,27.1590817 Z M8.66515427,56 L47.7841986,56 C52.6739629,56 54.4181241,54.5984253 54.4181241,51.8576005 C54.4181241,43.8219674 44.358068,32.7341519 28.22461,32.7341519 C12.0600561,32.7341519 2,43.8219674 2,51.8576005 C2,54.5984253 3.74402832,56 8.66515427,56 Z'
          )
        "
      />
    </svg>
    <ng-content></ng-content>`,
})
export class SkeletonAvatarComponent {
  @Input() size: number = 48;
  @Input() color: string;
  @Input() showIcon: boolean = true;
  @Input() iconColor: string;
  @Input() borderRadius: string = '50%';
  @Input() effect: SkeletonEffects;

  multiplyPoints(pointsString) {
    return multiplySvgPointsService(pointsString, 56, this.size, this.size);
  }
}
