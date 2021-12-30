import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PicklistModel } from "src/app/_models/PicklistModel";
import { CommonService } from "src/app/_services/common.service";
import { FileUploadService } from "src/app/_services/fileUpload.service";
import { ProductService } from "src/app/_services/product.service";
import { ProductModel } from "../products.component";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"],
})
export class CreateProductComponent implements OnInit {
  brands: PicklistModel[] = [];
  bikeCategories: PicklistModel[] = [];
  customers: PicklistModel[] = [];
  isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductModel,
    private productService: ProductService,
    private fileUploadService: FileUploadService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.productService.productDefaults().subscribe((res: any) => {
      const { bikeCategories, brands, customers } = res;
      this.brands = this.commonService.populatePicklistOptions(
        brands,
        "brand_name",
        "brand_id"
      );

      this.bikeCategories = this.commonService.populatePicklistOptions(
        bikeCategories,
        "category_name",
        "category_id"
      );

      this.customers = this.commonService.populatePicklistOptions(
        customers,
        "customer_name",
        "customer_id"
      );
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
