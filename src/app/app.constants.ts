import { PicklistModel } from "./_models/PicklistModel";

export const BASE_URL = "http://localhost:3000";
export const DefaultSelect: PicklistModel = { label: "--Select--", value: "" };
export const Years: PicklistModel[] = [
  { label: "2022", value: "2022" },
  { label: "2021", value: "2021" },
];

export const Months: PicklistModel[] = [
  DefaultSelect,
  { label: "January", value: "January" },
  { label: "February", value: "February" },
  { label: "March", value: "March" },
  { label: "April", value: "April" },
  { label: "May", value: "May" },
  { label: "June", value: "June" },
  { label: "July", value: "July" },
  { label: "August", value: "August" },
  { label: "September", value: "September" },
  { label: "October", value: "October" },
  { label: "November", value: "November" },
  { label: "December", value: "December" },
];

export const FilterKeys: PicklistModel[] = [
  DefaultSelect,
  { label: "Amount", value: "paid_amount" },
];
