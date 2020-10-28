import { NgModule } from '@angular/core';
import { SkeletonAvatarComponent } from './skeleton-avatar/skeleton-avatar.component';
import { SkeletonBlockComponent } from './skeleton-block/skeleton-block.component';
import { SkeletonTextComponent } from './skeleton-text/skeleton-text.component';
import { SkeletonImageComponent } from './skeleton-image/skeleton-image.component';

@NgModule({
  declarations: [
    SkeletonBlockComponent,
    SkeletonTextComponent,
    SkeletonImageComponent,
    SkeletonAvatarComponent,
  ],
  exports: [
    SkeletonBlockComponent,
    SkeletonTextComponent,
    SkeletonImageComponent,
    SkeletonAvatarComponent,
  ],
})
export class SkeletonElementsModule {}
