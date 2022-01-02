import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  TRANSACTIONS: string = `${BASE_URL}/transactions`;
  TRANSACTION: string = `${BASE_URL}/transactions/{0}`;
  TRANSACTION_DEFAULTS: string = `${BASE_URL}/defaults/transactions`;
  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get(this.TRANSACTIONS);
  }

  getTransaction(id: string) {
    return this.http.get(this.TRANSACTION.replace("{0}", id));
  }

  createTransaction(body: any) {
    return this.http.post(this.TRANSACTIONS, body);
  }

  updateTransaction(id: string, body: any) {
    return this.http.put(this.TRANSACTION.replace("{0}", id), body);
  }

  deleteTransaction(id: string) {
    return this.http.delete(this.TRANSACTION.replace("{0}", id));
  }

  transactionDefaults() {
    return this.http.get(this.TRANSACTION_DEFAULTS);
  }
}
