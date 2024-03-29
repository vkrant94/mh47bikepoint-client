import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { CommonService } from "../_services/common.service";
import { ProductService } from "../_services/product.service";
import { CreateProductComponent } from "./create-product/create-product.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "product_name",
    "brand_name",
    "category_name",
    "model_year",
    "stakeholder_name",
    "chassi_number",
    "vehicle_number",
    "actions",
  ];
  staffs: ProductModel[] = [];
  dataSource = new MatTableDataSource<ProductModel>(this.staffs);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    private commonService: CommonService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadProducts();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateProductComponent, {
      width: "800px",
      data: new ProductModel(),
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        let staffFormData = this.commonService.filterObject(formData);
        this.productService.createProduct(staffFormData).subscribe((res) => {
          this.openSnackBar("Product added successfully..!");
          this.loadProducts();
        });
      }
    });
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((res) => {
      this.staffs = res as ProductModel[];
      this.dataSource = new MatTableDataSource<ProductModel>(this.staffs);
    });
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe((res) => {
      this.openSnackBar("Product deleted successfully..!");
      this.loadProducts();
    });
  }

  editProduct(id: string): void {
    this.productService.getProduct(id).subscribe((vanData) => {
      const dialogRef = this.dialog.open(CreateProductComponent, {
        width: "800px",
        data: vanData,
      });

      dialogRef.afterClosed().subscribe((formData) => {
        if (formData) {
          const filteredData = this.commonService.filterObject(formData);
          this.productService
            .updateProduct(id, filteredData)
            .subscribe((res) => {
              this.openSnackBar("Product updated successfully..!");
              this.loadProducts();
            });
        }
      });
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 5 * 1000,
    });
  }
}

export class ProductModel {
  product_id = "";
  product_name = "";
  brand_id = "";
  category_id = "";
  model_year = "";
  stakeholder_id = "";
  chassi_number = "";
  colour = "";
  vehicle_number = "";
  insuarance_company = "";
  insuarance_expiry = "";
  puc_expiry = "";
  thumnail_url = "";
}
