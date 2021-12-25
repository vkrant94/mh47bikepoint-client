import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  CUSTOMERS: string = `${BASE_URL}/customers`;
  CUSTOMER: string = `${BASE_URL}/customers/{0}`;
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get(this.CUSTOMERS);
  }

  getCustomer(id: string) {
    return this.http.get(this.CUSTOMER.replace("{0}", id));
  }

  createCustomer(body: any) {
    return this.http.post(this.CUSTOMERS, body);
  }

  updateCustomer(id: string, body: any) {
    return this.http.put(this.CUSTOMER.replace("{0}", id), body);
  }

  deleteCustomer(id: string) {
    return this.http.delete(this.CUSTOMER.replace("{0}", id));
  }
}
