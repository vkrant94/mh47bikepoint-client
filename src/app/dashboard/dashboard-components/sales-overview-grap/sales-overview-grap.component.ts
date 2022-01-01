import { Component, OnInit } from "@angular/core";
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
export class SalesOverviewGrapComponent implements OnInit {
  data: any;

  options: any;

  constructor() {
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };

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

  ngOnInit(): void {}
}
