import { NgModule } from '@angular/core';
import { SkeletonBlockComponent } from './skeleton-block';
import { SkeletonAvatarComponent } from './skeleton-avatar';
import { CommonModule } from '@angular/common';
import { SkeletonTextDirective } from './skeleton-text';
import { SkeletonImageComponent } from './skeleton-image';

@NgModule({
  declarations: [
    SkeletonBlockComponent,
    SkeletonAvatarComponent,
    SkeletonTextDirective,
    SkeletonImageComponent,
  ],
  exports: [
    SkeletonBlockComponent,
    SkeletonAvatarComponent,
    SkeletonTextDirective,
    SkeletonImageComponent,
  ],
  imports: [CommonModule],
})
export class SkeletonElementsModule {}
