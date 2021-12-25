import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TowingVanModel } from "../towingvans.component";

@Component({
  selector: "app-create-towingvan",
  templateUrl: "./create-towingvan.component.html",
  styleUrls: ["./create-towingvan.component.css"],
})
export class CreateTowingvanComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateTowingvanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TowingVanModel
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
