import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FileUploadService } from "src/app/_services/fileUpload.service";
import { CustomerModel } from "../customers.component";

@Component({
  selector: "app-create-customer",
  templateUrl: "./create-customer.component.html",
  styleUrls: ["./create-customer.component.css"],
})
export class CreateCustomerComponent implements OnInit {
  isLoading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<CreateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerModel,
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
