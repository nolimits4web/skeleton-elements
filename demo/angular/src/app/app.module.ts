import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkeletonElementsModule } from 'skeleton-elements/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SkeletonElementsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
