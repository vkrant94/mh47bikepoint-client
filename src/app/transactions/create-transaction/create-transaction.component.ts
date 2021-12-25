import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "../transactions.component";

@Component({
  selector: "app-create-transaction",
  templateUrl: "./create-transaction.component.html",
  styleUrls: ["./create-transaction.component.css"],
})
export class CreateTransactionComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateTransactionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
