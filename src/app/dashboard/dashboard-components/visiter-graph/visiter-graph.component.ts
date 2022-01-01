import { Component, OnInit } from "@angular/core";
import * as Chartist from "chartist";
import { ChartType, ChartEvent } from "ng-chartist";
import { Subscription } from "rxjs";
import { AppConfig } from "src/app/_models/appConfig.model";

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: "app-visiter-graph",
  templateUrl: "./visiter-graph.component.html",
  styleUrls: ["./visiter-graph.component.css"],
})
export class VisiterGraphComponent implements OnInit {
  data: any;
  chartOptions: any;
  subscription!: Subscription;
  config!: AppConfig;

  constructor() {}

  ngOnInit() {
    this.data = {
      labels: ["With Gear", "Without Gear", "E-Bikes"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
          hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"],
        },
      ],
    };
  }
}
