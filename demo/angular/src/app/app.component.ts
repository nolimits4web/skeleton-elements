import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const demoItem = {
  title: 'Placeholder name',
  description: 'Lorem ipsum, dolor sit amet consectetur',
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  effect: string;
  form = new FormGroup({
    theme: new FormControl('light'),
  });

  demoListItems = Array.from({ length: 4 }).map(() => ({
    ...demoItem,
  }));

  setEffect(val) {
    this.effect = val;
  }
}
