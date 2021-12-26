import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GarageModel } from "../garages.component";

@Component({
  selector: "app-create-garage",
  templateUrl: "./create-garage.component.html",
  styleUrls: ["./create-garage.component.css"],
})
export class CreateGarageComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateGarageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GarageModel
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
