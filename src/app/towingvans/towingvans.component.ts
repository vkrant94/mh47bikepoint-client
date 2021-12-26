import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { TowingVanService } from "../_services/towingvan.service";
import { CreateTowingvanComponent } from "./create-towingvan/create-towingvan.component";

@Component({
  selector: "app-towingvans",
  templateUrl: "./towingvans.component.html",
  styleUrls: ["./towingvans.component.css"],
})
export class TowingvansComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "van_name",
    "driver_name",
    "van_number",
    "actions",
  ];
  towingVans: TowingVanModel[] = [];
  dataSource = new MatTableDataSource<TowingVanModel>(this.towingVans);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    public dialog: MatDialog,
    private towingVanService: TowingVanService,
    private _snackBar: MatSnackBar
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadTowingVans();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTowingvanComponent, {
      width: "800px",
      data: new TowingVanModel(),
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        const { van_id, ...remainingData } = formData;
        this.towingVanService
          .createTowingVan(remainingData)
          .subscribe((res) => {
            this.openSnackBar("Towing Van added successfully..!");
            this.loadTowingVans();
          });
      }
    });
  }

  loadTowingVans(): void {
    this.towingVanService.getTowingVans().subscribe((res) => {
      this.towingVans = res as TowingVanModel[];
      this.dataSource = new MatTableDataSource<TowingVanModel>(this.towingVans);
    });
  }

  deleteTowingVan(id: string): void {
    this.towingVanService.deleteTowingVan(id).subscribe((res) => {
      this.openSnackBar("Towing Van added successfully..!");
      this.loadTowingVans();
    });
  }

  editTowingVan(id: string): void {
    const vanData = this.towingVans.find((t) => t.van_id === id);
    const dialogRef = this.dialog.open(CreateTowingvanComponent, {
      width: "800px",
      data: vanData,
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        this.towingVanService.updateTowingVan(id, formData).subscribe((res) => {
          this.openSnackBar("Towing Van updated successfully..!");
          this.loadTowingVans();
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

export class TowingVanModel {
  van_id: string = "";
  van_name: string = "";
  driver_name: string = "";
  van_number: string = "";
}
