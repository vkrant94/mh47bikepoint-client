import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { StoreService } from "../_services/store.service";
import { CreateStoreComponent } from "./create-store/create-store.component";

@Component({
  selector: "app-stores",
  templateUrl: "./stores.component.html",
  styleUrls: ["./stores.component.css"],
})
export class StoresComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "store_name",
    "phone",
    "email",
    "address_line1",
    "address_line2",
    "city",
    "state",
    "zip_code",
    "actions",
  ];
  stores: StoreModel[] = [];
  dataSource = new MatTableDataSource<StoreModel>(this.stores);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private storeService: StoreService,
    private _snackBar: MatSnackBar
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadStores();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateStoreComponent, {
      width: "800px",
      data: new StoreModel(),
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        const { store_id, ...remainingData } = formData;
        this.storeService.createStore(remainingData).subscribe((res) => {
          this.openSnackBar("Store added successfully..!");
          this.loadStores();
        });
      }
    });
  }

  loadStores(): void {
    this.storeService.getStores().subscribe((res) => {
      this.stores = res as StoreModel[];
      this.dataSource = new MatTableDataSource<StoreModel>(this.stores);
    });
  }

  deleteStore(id: string): void {
    this.storeService.deleteStore(id).subscribe((res) => {
      this.openSnackBar("Customer deleted successfully..!");
      this.loadStores();
    });
  }

  editStore(id: string): void {
    const vanData = this.stores.find((t) => t.store_id === id);
    const dialogRef = this.dialog.open(CreateStoreComponent, {
      width: "800px",
      data: vanData,
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        this.storeService.updateStore(id, formData).subscribe((res) => {
          this.openSnackBar("Store updated successfully..!");
          this.loadStores();
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

export class StoreModel {
  store_id = "";
  store_name = "";
  phone = "";
  email = "";
  address_line1 = "";
  address_line2 = "";
  city = "";
  state = "";
  zip_code = "";
}
