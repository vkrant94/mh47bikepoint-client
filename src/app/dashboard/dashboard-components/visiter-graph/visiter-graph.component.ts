import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import * as Chartist from "chartist";
import { ChartType, ChartEvent } from "ng-chartist";
import { Subscription } from "rxjs";
import { Months, Years } from "src/app/app.constants";
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
  visitorsOverview = new FormGroup({
    year: new FormControl("2022"),
    month: new FormControl(""),
  });
  years = Years;
  months = Months;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.loadVisitors();
  }

  get year(): string {
    return this.visitorsOverview.controls["year"].value;
  }

  get month(): string {
    return this.visitorsOverview.controls["month"].value;
  }

  onYearSelected(event: any) {
    this.visitorsOverview.controls["year"].setValue(event.value);
    this.loadVisitors();
  }

  onMonthSelected(event: any) {
    this.visitorsOverview.controls["month"].setValue(event.value);
    this.loadVisitors();
  }

  loadVisitors(): void {
    this.dashboardService
      .getVisitorsOverview({ year: this.year, month: this.month })
      .subscribe((res: any) => {
        this.data = res.visitors;
      });
  }
}
