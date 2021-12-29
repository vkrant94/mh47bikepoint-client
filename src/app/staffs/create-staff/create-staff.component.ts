import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DefaultSelect } from "src/app/app.constants";
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
    private fileUploadService: FileUploadService
  ) {}

  ngOnInit(): void {
    this.staffService.staffDefaults().subscribe((res: any) => {
      const { stores, managers } = res;
      this.stores = stores.map((s: any) => {
        return { label: s.store_name, value: s.store_id };
      });

      this.managers = [
        ...this.managers,
        ...managers.map((m: any) => {
          return { label: m.manager_name, value: m.manager_id };
        }),
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

export interface PicklistModel {
  label: string;
  value: any;
}
