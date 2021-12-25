import { Routes } from "@angular/router";
import { TowingvansComponent } from "../towingvans/towingvans.component";
import { TransactionsComponent } from "../transactions/transactions.component";

export const MaterialRoutes: Routes = [
  {
    path: "transactions",
    component: TransactionsComponent,
  },
  {
    path: "towingvans",
    component: TowingvansComponent,
  },
];
