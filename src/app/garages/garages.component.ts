import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { GarageService } from "../_services/garage.service";
import { CreateGarageComponent } from "./create-garage/create-garage.component";

@Component({
  selector: "app-garages",
  templateUrl: "./garages.component.html",
  styleUrls: ["./garages.component.css"],
})
export class GaragesComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "garage_name",
    "phone",
    "email",
    "address_line1",
    "address_line2",
    "city",
    "state",
    "zip_code",
    "actions",
  ];
  garages: GarageModel[] = [];
  dataSource = new MatTableDataSource<GarageModel>(this.garages);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private garageService: GarageService,
    private _snackBar: MatSnackBar
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadGarage();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateGarageComponent, {
      width: "800px",
      data: new GarageModel(),
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        const { garage_id, ...remainingData } = formData;
        this.garageService.createGarage(remainingData).subscribe((res) => {
          this.openSnackBar("Garage added successfully..!");
          this.loadGarage();
        });
      }
    });
  }

  loadGarage(): void {
    this.garageService.getGarages().subscribe((res) => {
      this.garages = res as GarageModel[];
      this.dataSource = new MatTableDataSource<GarageModel>(this.garages);
    });
  }

  deleteGarage(id: string): void {
    this.garageService.deleteGarage(id).subscribe((res) => {
      this.openSnackBar("Garage deleted successfully..!");
      this.loadGarage();
    });
  }

  editGarage(id: string): void {
    const vanData = this.garages.find((t) => t.garage_id === id);
    const dialogRef = this.dialog.open(CreateGarageComponent, {
      width: "800px",
      data: vanData,
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        this.garageService.updateGarage(id, formData).subscribe((res) => {
          this.openSnackBar("Garage updated successfully..!");
          this.loadGarage();
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

export class GarageModel {
  garage_id = "";
  garage_name = "";
  phone = "";
  email = "";
  address_line1 = "";
  address_line2 = "";
  city = "";
  state = "";
  zip_code = "";
}
