import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class StakeholderService {
  STAKEHOLDERS: string = `${BASE_URL}/stakeholders`;
  STAKEHOLDER: string = `${BASE_URL}/stakeholders/{0}`;
  constructor(private http: HttpClient) {}

  getStakeholders() {
    return this.http.get(this.STAKEHOLDERS);
  }

  getStakeholder(id: string) {
    return this.http.get(this.STAKEHOLDER.replace("{0}", id));
  }

  createStakeholder(body: any) {
    return this.http.post(this.STAKEHOLDERS, body);
  }

  updateStakeholder(id: string, body: any) {
    return this.http.put(this.STAKEHOLDER.replace("{0}", id), body);
  }

  deleteStakeholder(id: string) {
    return this.http.delete(this.STAKEHOLDER.replace("{0}", id));
  }
}
