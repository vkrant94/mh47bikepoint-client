import { Injectable } from "@angular/core";

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: "dashboard", name: "Dashboard", type: "link", icon: "av_timer" },
  {
    state: "transactions",
    type: "link",
    name: "Transactions",
    icon: "paid",
  },
  {
    state: "towingvans",
    type: "link",
    name: "Towing Vans",
    icon: "local_shipping",
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
