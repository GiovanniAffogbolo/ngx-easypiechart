import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
declare var EasyPieChart: any;

@Component({
  selector: 'ngx-easypiechart',
  template: `<div>Loading ngx-easypiechart...</div>`
})
export class NgxEasypiechartComponent implements OnInit, OnChanges {

  @Input()
  options: any;

  @Input()
  percent: number;

  private pieChart: any;

  constructor(private element: ElementRef<HTMLDivElement>) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let optionsChanged = false;
    if (changes.percent) {
      this.percent = changes.percent.currentValue;
    }
    if (changes.options) {
      this.options = changes.options.currentValue;
      optionsChanged = true;
    }
    this.loadChart(optionsChanged);
  }

  loadChart(optionsChanged: boolean) {
    if (this.options && this.percent) {
      if (optionsChanged) {
        const node = this.element.nativeElement;
        while (node.hasChildNodes()) {
          node.removeChild(node.lastChild);
        }
        this.pieChart = new EasyPieChart(node, this.options);
      }
      if (this.pieChart) {
        this.pieChart.update(this.percent);
      }
    }
  }

}
