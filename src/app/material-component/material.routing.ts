import { Routes } from "@angular/router";
import { CustomersComponent } from "../customers/customers.component";
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
  {
    path: "customers",
    component: CustomersComponent,
  },
];
