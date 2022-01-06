import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import * as Chartist from "chartist";
import { ChartType, ChartEvent } from "ng-chartist";
import { ChartModule } from "primeng/chart";

declare var require: any;
const data = require("./data.json");

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: "app-sales-overview-grap",
  templateUrl: "./sales-overview-grap.component.html",
  styleUrls: ["./sales-overview-grap.component.css"],
})
export class SalesOverviewGrapComponent implements OnInit, OnChanges {
  @Input() monthlySales: any;
  data: any;

  options: any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.data = this.monthlySales;

    this.options = {
      title: {
        display: true,
        text: "My Title",
        fontSize: 16,
      },
      legend: {
        position: "bottom",
      },
    };
  }
}
