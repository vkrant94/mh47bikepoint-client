import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { CustomerService } from "../_services/customer.service";
import { CreateCustomerComponent } from "./create-customer/create-customer.component";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"],
})
export class CustomersComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "first_name",
    "last_name",
    "phone",
    "email",
    "address_line1",
    "address_line2",
    "city",
    "state",
    "zip_code",
    "actions",
  ];
  customers: CustomerModel[] = [];
  dataSource = new MatTableDataSource<CustomerModel>(this.customers);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private customerService: CustomerService,
    private _snackBar: MatSnackBar
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadCustomers();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: "800px",
      data: new CustomerModel(),
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        this.customerService.createCustomer(formData).subscribe((res) => {
          this.openSnackBar("Customer added successfully..!");
          this.loadCustomers();
        });
      }
    });
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe((res) => {
      this.customers = res as CustomerModel[];
      this.dataSource = new MatTableDataSource<CustomerModel>(this.customers);
    });
  }

  deleteCustomer(id: string): void {
    this.customerService.deleteCustomer(id).subscribe((res) => {
      this.openSnackBar("Customer deleted successfully..!");
      this.loadCustomers();
    });
  }

  editCustomer(id: string): void {
    const vanData = this.customers.find((t) => t.customer_id === id);
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: "800px",
      data: vanData,
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        this.customerService.updateCustomer(id, formData).subscribe((res) => {
          this.openSnackBar("Customer updated successfully..!");
          this.loadCustomers();
        });
      }
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

export class CustomerModel {
  customer_id = "";
  first_name = "";
  last_name = "";
  phone = "";
  email = "";
  address_line1 = "";
  address_line2 = "";
  city = "";
  state = "";
  zip_code = "";
}
