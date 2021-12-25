import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class TowingVanService {
  TOWINGVANS: string = `${BASE_URL}/towingVans`;
  TOWINGVAN: string = `${BASE_URL}/towingVans/{0}`;
  constructor(private http: HttpClient) {}

  getTowingVans() {
    return this.http.get(this.TOWINGVANS);
  }

  getTowingVan(id: string) {
    return this.http.get(this.TOWINGVAN.replace("{0}", id));
  }

  createTowingVan(body: any) {
    return this.http.post(this.TOWINGVANS, body);
  }

  updateTowingVan(id: string, body: any) {
    return this.http.put(this.TOWINGVAN.replace("{0}", id), body);
  }

  deleteTowingVan(id: string) {
    return this.http.delete(this.TOWINGVAN.replace("{0}", id));
  }
}
