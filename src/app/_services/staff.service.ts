import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class StaffService {
  STAFFS: string = `${BASE_URL}/staffs`;
  STAFF: string = `${BASE_URL}/staffs/{0}`;
  STAFF_DEFAULTS: string = `${BASE_URL}/staffs/defaults`;
  constructor(private http: HttpClient) {}

  getStaffs() {
    return this.http.get(this.STAFFS);
  }

  getStaff(id: string) {
    return this.http.get(this.STAFF.replace("{0}", id));
  }

  createStaff(body: any) {
    return this.http.post(this.STAFFS, body);
  }

  updateStaff(id: string, body: any) {
    return this.http.put(this.STAFF.replace("{0}", id), body);
  }

  deleteStaff(id: string) {
    return this.http.delete(this.STAFF.replace("{0}", id));
  }

  staffDefaults() {
    return this.http.get(this.STAFF_DEFAULTS);
  }
}
