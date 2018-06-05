import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-easypiechart',
  template: `
    <p>
      ngx-easypiechart works!
    </p>
  `,
  styles: []
})
export class NgxEasypiechartComponent implements OnInit {

  @Input()
  options: any;

  constructor() { }

  ngOnInit() {
  }

}
