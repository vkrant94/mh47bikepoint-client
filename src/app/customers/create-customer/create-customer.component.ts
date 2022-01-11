import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ImageCroppedEvent } from "ngx-image-cropper";
import { CommonService } from "src/app/_services/common.service";
import { FileUploadService } from "src/app/_services/fileUpload.service";
import { CustomerModel } from "../customers.component";

@Component({
  selector: "app-create-customer",
  templateUrl: "./create-customer.component.html",
  styleUrls: ["./create-customer.component.css"],
})
export class CreateCustomerComponent implements OnInit {
  imageChangedEvent: any = "";
  croppedImage: any = "";
  isLoading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<CreateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerModel,
    private fileUploadService: FileUploadService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  processFile(event: any) {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  onFormSubmit(): void {
    this.uploadProfilePic((res: any) => {
      this.dialogRef.close(this.data);
    });
  }

  uploadProfilePic(callback: any) {
    this.isLoading = true;
    const file: File = this.commonService.convertBase64ToBlob(
      this.croppedImage
    );
    this.fileUploadService.upload(file).subscribe((res: any) => {
      this.isLoading = false;
      this.data.thumnail_url = res.secure_url;
      callback(true);
    });
  }
}
