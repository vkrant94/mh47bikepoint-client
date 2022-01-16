import { Component, Inject, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  SelectControlValueAccessor,
} from "@angular/forms";
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

  transactionGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<CreateTransactionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TransactionModel,
    private transactionService: TransactionService,
    private commonService: CommonService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.setValues(this.data);
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

    this.transactionGroup.valueChanges.subscribe((res) => {
      console.log(res);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get isEndDateEnabled(): boolean {
    return (
      this.transactionGroup.controls["transaction_status"].value !== "Completed"
    );
  }

  get isStaffVisible(): boolean {
    return ["Salary", "Bike Purchase", "Bike Sale", "Staff Welfare"].includes(
      this.transactionGroup.controls["transaction_type"].value
    );
  }

  get isStoreVisible(): boolean {
    return [
      "Salary",
      "Bike Purchase",
      "Bike Sale",
      "Staff Welfare",
      "Conveyance",
      "Shop Maintainence",
      "RTO Expenditure",
      "Towing",
      "Electricity Bill",
    ].includes(this.transactionGroup.controls["transaction_type"].value);
  }

  get isProductsVisible(): boolean {
    return [
      "Bike Purchase",
      "Bike Sale",
      "Bike Repair",
      "Towing",
      "Washing",
      "RTO Expenditure",
    ].includes(this.transactionGroup.controls["transaction_type"].value);
  }

  setValues(data: TransactionModel): void {
    this.transactionGroup = this.formBuilder.group({
      transaction_id: [data.transaction_id],
      customer_id: [data.customer_id],
      product_id: [data.product_id],
      transaction_status: [data.transaction_status],
      transaction_type: [data.transaction_type],
      start_date: [data.start_date],
      end_date: [data.end_date],
      store_id: [data.store_id],
      staff_id: [data.staff_id],
      invoice_number: [data.invoice_number],
      trans_amount: [data.trans_amount],
      paid_amount: [data.paid_amount],
      garage_id: [data.garage_id],
      van_id: [data.van_id],
      payment_mode: [data.payment_mode],
      financer: [data.financer],
      down_payment: [data.down_payment],
      loan_amount: [data.loan_amount],
      stakeholder_id: [data.stakeholder_id],
      paper_handover_date: [data.paper_handover_date],
      rto_paper_recv_date: [data.rto_paper_recv_date],
      rto_reciept_recv: [data.rto_reciept_recv],
      drc_pending: [data.drc_pending],
      hp_pending: [data.hp_pending],
    });
  }
}

const TransactionTypes: PicklistModel[] = [
  { label: "Salary", value: "Salary" },
  { label: "Bike Purchase", value: "Bike Purchase" },
  { label: "Bike Sale", value: "Bike Sale" },
  { label: "Rent", value: "Rent" },
  { label: "Electricity Bill", value: "Electricity Bill" },
  { label: "Bike Repair", value: "Bike Repair" },
  { label: "Towing", value: "Towing" },
  { label: "Washing", value: "Washing" },
  { label: "RTO Expenditure", value: "RTO Expenditure" },
  { label: "Shop Maintainence", value: "Shop Maintainence" },
  { label: "Conveyance", value: "Conveyance" },
  { label: "Staff Welfare", value: "Staff Welfare" },
  { label: "Personal", value: "Personal" },
];

const TransactionStatus: PicklistModel[] = [
  { label: "Initiated", value: "Initiated" },
  { label: "Pending", value: "Pending" },
  { label: "Processing", value: "Processing" },
  { label: "Rejected", value: "Rejected" },
  { label: "Completed", value: "Completed" },
];
