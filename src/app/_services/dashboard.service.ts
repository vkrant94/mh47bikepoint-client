import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../app.constants";
import { CommonService } from "./common.service";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  DASHBOARD: string = `${BASE_URL}/dashboard`;
  SALES_OVERVIEW: string = `${this.DASHBOARD}/salesoverview`;
  VISITORS: string = `${this.DASHBOARD}/visitors`;
  constructor(private http: HttpClient, private commonService: CommonService) {}

  getSalesOverview(queryObject: any) {
    const filteredObject = this.commonService.filterObject(queryObject);
    const queryString = this.commonService
      .createQueryString(filteredObject)
      .join("&");
    return this.http.get(`${this.SALES_OVERVIEW}?${queryString}`);
  }

  getVisitorsOverview() {
    return this.http.get(`${this.VISITORS}`);
  }
}
