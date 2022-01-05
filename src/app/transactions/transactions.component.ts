import { AfterViewInit, Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { CommonService } from "../_services/common.service";
import { TransactionService } from "../_services/transaction.service";
import { CreateTransactionComponent } from "./create-transaction/create-transaction.component";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"],
})
export class TransactionsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "transaction_type",
    "start_date",
    "transaction_status",
    "product_name",
    "staff_name",
    "trans_amount",
    "actions",
  ];
  stores: TransactionModel[] = [];
  dataSource = new MatTableDataSource<TransactionModel>(this.stores);

  constructor(
    public dialog: MatDialog,
    private transactionService: TransactionService,
    private _snackBar: MatSnackBar,
    private commonService: CommonService
  ) {}

  ngAfterViewInit() {
    this.loadTransactions();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTransactionComponent, {
      width: "800px",
      data: new TransactionModel(),
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        const remainingData = this.commonService.filterObject(formData);
        this.transactionService
          .createTransaction(remainingData)
          .subscribe((res) => {
            this.openSnackBar("Transaction added successfully..!");
            this.loadTransactions();
          });
      }
    });
  }

  loadTransactions(): void {
    this.transactionService.getTransactions().subscribe((res) => {
      this.stores = res as TransactionModel[];
      this.dataSource = new MatTableDataSource<TransactionModel>(this.stores);
    });
  }

  deleteTransaction(id: string): void {
    this.transactionService.deleteTransaction(id).subscribe((res) => {
      this.openSnackBar("Customer deleted successfully..!");
      this.loadTransactions();
    });
  }

  editTransaction(id: string): void {
    const vanData = this.stores.find((t) => t.transaction_id === id);
    const dialogRef = this.dialog.open(CreateTransactionComponent, {
      width: "800px",
      data: vanData,
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        const remainingData = this.commonService.filterObject(formData);
        this.transactionService
          .updateTransaction(id, remainingData)
          .subscribe((res) => {
            this.openSnackBar("Transaction updated successfully..!");
            this.loadTransactions();
          });
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 5 * 1000,
    });
  }
}

export class TransactionModel {
  transaction_id: string = "";
  customer_id: string = "";
  product_id: string = "";
  transaction_status: string = "";
  transaction_type: string = "";
  start_date: string = "";
  end_date: string = "";
  store_id: string = "";
  staff_id: string = "";
  invoice_number: string = "";
  trans_amount: number = 0;
  paid_amount: number = 0;
  garage_id: string = "";
  van_id: string = "";
  payment_mode: string = "";
  financer: string = "";
  down_payment: number = 0;
  loan_amount: number = 0;
  stakeholder_id: string = "";
  paper_handover_date: string = "";
  rto_paper_recv_date: string = "";
  rto_reciept_recv: string = "";
  drc_pending: number = 0;
  hp_pending: number = 0;
}
