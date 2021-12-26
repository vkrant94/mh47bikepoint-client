import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { StoreModel } from "../stores.component";

@Component({
  selector: "app-create-store",
  templateUrl: "./create-store.component.html",
  styleUrls: ["./create-store.component.css"],
})
export class CreateStoreComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateStoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StoreModel
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
