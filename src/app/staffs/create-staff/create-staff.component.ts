import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DefaultSelect } from "src/app/app.constants";
import { PicklistModel } from "src/app/_models/PicklistModel";
import { CommonService } from "src/app/_services/common.service";
import { FileUploadService } from "src/app/_services/fileUpload.service";
import { StaffService } from "src/app/_services/staff.service";
import { StaffModel } from "../staffs.component";

@Component({
  selector: "app-create-staff",
  templateUrl: "./create-staff.component.html",
  styleUrls: ["./create-staff.component.css"],
})
export class CreateStaffComponent implements OnInit {
  statuses: PicklistModel[] = [
    { value: 0, label: "No" },
    { value: 1, label: "Yes" },
  ];

  positions: PicklistModel[] = [
    { value: "Manager", label: "Manager" },
    { value: "Staff", label: "Staff" },
  ];

  stores: PicklistModel[] = [];
  managers: PicklistModel[] = [DefaultSelect];
  isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CreateStaffComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StaffModel,
    private staffService: StaffService,
    private fileUploadService: FileUploadService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.staffService.staffDefaults().subscribe((res: any) => {
      const { stores, managers } = res;
      this.stores = this.commonService.populatePicklistOptions(
        stores,
        "store_name",
        "store_id"
      );

      this.managers = [
        ...this.managers,
        ...this.commonService.populatePicklistOptions(
          managers,
          "manager_name",
          "manager_id"
        ),
      ];
    });
  }

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
