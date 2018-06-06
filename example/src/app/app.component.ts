import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  percent: number;
  options: any;

  constructor() {
    this.percent = 80;
    this.options = {
      size: 50,
      rotate: 0
    };
    const self = this;
    setTimeout(
      function() {
        self.percent = 60;
      }, 3000
    );
    setTimeout(
      function() {
        self.percent = 90;
      }, 3000
    );
    setTimeout(
      function() {
        self.options = {
          size: 100,
          rotate: 0
        };
      },
      4000
    );
  }

}
