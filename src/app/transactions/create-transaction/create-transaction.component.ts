import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PicklistModel } from "src/app/_models/PicklistModel";
import { CommonService } from "src/app/_services/common.service";
import { ProductService } from "src/app/_services/product.service";
import { TransactionService } from "src/app/_services/transaction.service";
import { TransactionModel } from "../transactions.component";

@Component({
  selector: "app-create-transaction",
  templateUrl: "./create-transaction.component.html",
  styleUrls: ["./create-transaction.component.css"],
})
export class CreateTransactionComponent implements OnInit {
  customers: PicklistModel[] = [];
  products: PicklistModel[] = [];
  stores: PicklistModel[] = [];
  staffs: PicklistModel[] = [];
  garages: PicklistModel[] = [];
  vans: PicklistModel[] = [];
  stakeholders: PicklistModel[] = [];
  transTypes: PicklistModel[] = TransactionTypes;
  transStatus: PicklistModel[] = TransactionStatus;
  isLoading: boolean = false;

  transactionGroup = new FormGroup({
    transaction_id: new FormControl(""),
    customer_id: new FormControl(""),
    product_id: new FormControl(""),
    transaction_status: new FormControl(""),
    transaction_type: new FormControl(""),
    start_date: new FormControl(""),
    end_date: new FormControl(""),
    store_id: new FormControl(""),
    staff_id: new FormControl(""),
    invoice_number: new FormControl(""),
    trans_amount: new FormControl(0),
    paid_amount: new FormControl(0),
    garage_id: new FormControl(""),
    van_id: new FormControl(""),
    payment_mode: new FormControl(""),
    financer: new FormControl(""),
    down_payment: new FormControl(0),
    loan_amount: new FormControl(0),
    stakeholder_id: new FormControl(""),
    paper_handover_date: new FormControl(""),
    rto_paper_recv_date: new FormControl(""),
    rto_reciept_recv: new FormControl(""),
    drc_pending: new FormControl(0),
    hp_pending: new FormControl(0),
  });

  constructor(
    public dialogRef: MatDialogRef<CreateTransactionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TransactionModel,
    private transactionService: TransactionService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.transactionService.transactionDefaults().subscribe((res: any) => {
      const {
        customers,
        products,
        stores,
        staffs,
        garages,
        vans,
        stakeholders,
      } = res;

      this.customers = this.commonService.populatePicklistOptions(
        customers,
        "customer_name",
        "customer_id"
      );
      this.products = this.commonService.populatePicklistOptions(
        products,
        "product_name",
        "product_id"
      );
      this.stores = this.commonService.populatePicklistOptions(
        stores,
        "store_name",
        "store_id"
      );
      this.staffs = this.commonService.populatePicklistOptions(
        staffs,
        "staff_name",
        "staff_id"
      );
      this.garages = this.commonService.populatePicklistOptions(
        garages,
        "garage_name",
        "garage_id"
      );
      this.vans = this.commonService.populatePicklistOptions(
        vans,
        "van_name",
        "van_id"
      );
      this.stakeholders = this.commonService.populatePicklistOptions(
        stakeholders,
        "stakeholder_name",
        "stakeholder_id"
      );
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get isTransEndDateEnabled(): boolean {
    return this.data.transaction_status !== "Completed";
  }
}

const TransactionTypes: PicklistModel[] = [
  { label: "Bike Purchase", value: "Bike Purchase" },
  { label: "Salary", value: "Salary" },
  { label: "Rent", value: "Rent" },
  { label: "Electricity Bill", value: "Electricity Bill" },
  { label: "Bike Repair", value: "Bike Repair" },
  { label: "Towing", value: "Towing" },
  { label: "Washing", value: "Washing" },
  { label: "RTO Expenditure", value: "RTO Expenditure" },
  { label: "Shop Maintainence", value: "Shop Maintainence" },
  { label: "Conveyance", value: "Conveyance" },
  { label: "Staff Welfare", value: "Staff Welfare" },
];

const TransactionStatus: PicklistModel[] = [
  { label: "Initiated", value: "Initiated" },
  { label: "Pending", value: "Pending" },
  { label: "Processing", value: "Processing" },
  { label: "Rejected", value: "Rejected" },
  { label: "Completed", value: "Completed" },
];
