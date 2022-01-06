import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  DASHBOARD: string = `${BASE_URL}/dashboard`;
  constructor(private http: HttpClient) {}

  getDashboard() {
    return this.http.get(this.DASHBOARD);
  }
}
