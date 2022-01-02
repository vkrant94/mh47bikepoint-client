import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PicklistModel } from "src/app/_models/PicklistModel";
import { FileUploadService } from "src/app/_services/fileUpload.service";
import { StakeholderModel } from "../stakeholders.component";

@Component({
  selector: "app-create-stakeholder",
  templateUrl: "./create-stakeholder.component.html",
  styleUrls: ["./create-stakeholder.component.css"],
})
export class CreateStakeholderComponent implements OnInit {
  isLoading: boolean = false;
  roles: PicklistModel[] = [
    { label: "RTO Agent", value: "RTO Agent" },
    { label: "Dealer", value: "Dealer" },
  ];

  constructor(
    public dialogRef: MatDialogRef<CreateStakeholderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StakeholderModel,
    private fileUploadService: FileUploadService
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  processFile(event: any) {
    this.isLoading = true;
    const file: File = event.target.files[0];
    this.fileUploadService.upload(file).subscribe((res: any) => {
      this.isLoading = false;
      this.data.thumnail_url = res.secure_url;
    });
  }
}
