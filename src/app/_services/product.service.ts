import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  PRODUCTS: string = `${BASE_URL}/products`;
  PRODUCT: string = `${BASE_URL}/products/{0}`;
  PRODUCT_DEFAULTS: string = `${BASE_URL}/defaults/products`;
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.PRODUCTS);
  }

  getProduct(id: string) {
    return this.http.get(this.PRODUCT.replace("{0}", id));
  }

  createProduct(body: any) {
    return this.http.post(this.PRODUCTS, body);
  }

  updateProduct(id: string, body: any) {
    return this.http.put(this.PRODUCT.replace("{0}", id), body);
  }

  deleteProduct(id: string) {
    return this.http.delete(this.PRODUCT.replace("{0}", id));
  }

  productDefaults() {
    return this.http.get(this.PRODUCT_DEFAULTS);
  }
}
