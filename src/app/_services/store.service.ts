import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  STORES: string = `${BASE_URL}/stores`;
  STORE: string = `${BASE_URL}/stores/{0}`;
  constructor(private http: HttpClient) {}

  getStores() {
    return this.http.get(this.STORES);
  }

  getStore(id: string) {
    return this.http.get(this.STORE.replace("{0}", id));
  }

  createStore(body: any) {
    return this.http.post(this.STORES, body);
  }

  updateStore(id: string, body: any) {
    return this.http.put(this.STORE.replace("{0}", id), body);
  }

  deleteStore(id: string) {
    return this.http.delete(this.STORE.replace("{0}", id));
  }
}
