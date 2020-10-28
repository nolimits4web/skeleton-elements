import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-angular',
  template: `
    <p>
      angular works!
    </p>
  `,
  styles: [],
})
export class AngularComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
