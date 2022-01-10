import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import * as Chartist from "chartist";
import { ChartType, ChartEvent } from "ng-chartist";
import { Months, Years } from "src/app/app.constants";
import { DashboardService } from "src/app/_services/dashboard.service";

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
  dashboardContents: any;
  monthlySales: any;
  options: any;
  salesOverviewGroup = new FormGroup({
    year: new FormControl("2022"),
    month: new FormControl(""),
  });
  years = Years;
  months = Months;

  constructor(private dasboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadGraph();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.options = {
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };
  }

  onYearSelected(event: any) {
    this.salesOverviewGroup.controls["year"].setValue(event.value);
    this.loadGraph();
  }

  onMonthSelected(event: any) {
    this.salesOverviewGroup.controls["month"].setValue(event.value);
    this.loadGraph();
  }

  get year(): string {
    return this.salesOverviewGroup.controls["year"].value;
  }

  get month(): string {
    return this.salesOverviewGroup.controls["month"].value;
  }

  loadGraph(): void {
    this.dasboardService
      .getSalesOverview({ year: this.year, month: this.month })
      .subscribe((res: any) => {
        this.monthlySales = res.monthlySales;
      });
  }
}
