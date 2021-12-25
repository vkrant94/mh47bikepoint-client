import { Routes } from "@angular/router";
import { TransactionsComponent } from "../transactions/transactions.component";

export const MaterialRoutes: Routes = [
  {
    path: "transactions",
    component: TransactionsComponent,
  },
];
