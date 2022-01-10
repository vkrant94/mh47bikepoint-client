import { Component, OnInit } from "@angular/core";
import * as Chartist from "chartist";
import { ChartType, ChartEvent } from "ng-chartist";
import { Subscription } from "rxjs";
import { AppConfig } from "src/app/_models/appConfig.model";
import { DashboardService } from "src/app/_services/dashboard.service";

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

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.getVisitors();
  }

  getVisitors(): void {
    this.dashboardService.getVisitorsOverview().subscribe((res: any) => {
      setTimeout(() => {
        this.data = res.visitors;
      }, 2000);
    });
  }
}
