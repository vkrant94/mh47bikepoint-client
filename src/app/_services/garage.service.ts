import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class GarageService {
  GARAGES: string = `${BASE_URL}/garages`;
  GARAGE: string = `${BASE_URL}/garages/{0}`;
  constructor(private http: HttpClient) {}

  getGarages() {
    return this.http.get(this.GARAGES);
  }

  getGarage(id: string) {
    return this.http.get(this.GARAGE.replace("{0}", id));
  }

  createGarage(body: any) {
    return this.http.post(this.GARAGES, body);
  }

  updateGarage(id: string, body: any) {
    return this.http.put(this.GARAGE.replace("{0}", id), body);
  }

  deleteGarage(id: string) {
    return this.http.delete(this.GARAGE.replace("{0}", id));
  }
}
