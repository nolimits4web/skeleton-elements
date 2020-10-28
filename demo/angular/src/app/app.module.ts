import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularModule } from 'skeleton-elements/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
