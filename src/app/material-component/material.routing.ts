import { Routes } from "@angular/router";
import { CustomersComponent } from "../customers/customers.component";
import { GaragesComponent } from "../garages/garages.component";
import { ProductsComponent } from "../products/products.component";
import { StaffsComponent } from "../staffs/staffs.component";
import { StakeholdersComponent } from "../stakeholders/stakeholders.component";
import { StoresComponent } from "../stores/stores.component";
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
  {
    path: "stakeholders",
    component: StakeholdersComponent,
  },
  {
    path: "stores",
    component: StoresComponent,
  },
  {
    path: "garages",
    component: GaragesComponent,
  },
  {
    path: "staffs",
    component: StaffsComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  },
];
