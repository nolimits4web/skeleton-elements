import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SkeletonEffects } from 'skeleton-elements/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  effect: SkeletonEffects;
  form = new FormGroup({
    theme: new FormControl('light'),
  });

  demoListItems = Array.from({ length: 4 }).map(() => ({
    title: 'Placeholder name',
    description: 'Lorem ipsum, dolor sit amet consectetur',
  }));

  setEffect(val) {
    this.effect = val;
  }
}
