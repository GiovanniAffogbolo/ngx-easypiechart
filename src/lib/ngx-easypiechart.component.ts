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
        // TODO: For some reason , 'EasyPieChart' constructor creates a new chart / canvas everytime it is instantiated.
        // wish there were a method to update options from an existing 'EasyPieChart' instance / object.
        // Until then - we remove all existing children under the given div of the component and then recreate altogether if there are new options
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
