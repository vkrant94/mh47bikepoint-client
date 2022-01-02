import { AfterViewInit, Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { StakeholderService } from "../_services/stakeholder.service";
import { CreateStakeholderComponent } from "./create-stakeholder/create-stakeholder.component";

@Component({
  selector: "app-stakeholders",
  templateUrl: "./stakeholders.component.html",
  styleUrls: ["./stakeholders.component.css"],
})
export class StakeholdersComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "stakeholder_name",
    "type",
    "phone",
    "email",
    "address_line1",
    "address_line2",
    "city",
    "state",
    "zip_code",
    "actions",
  ];
  stakeholders: StakeholderModel[] = [];
  dataSource = new MatTableDataSource<StakeholderModel>(this.stakeholders);

  constructor(
    public dialog: MatDialog,
    private stakeholderService: StakeholderService,
    private _snackBar: MatSnackBar
  ) {}

  ngAfterViewInit() {
    this.loadStakeholders();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateStakeholderComponent, {
      width: "800px",
      data: new StakeholderModel(),
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        const { stakeholder_id, ...remainingData } = formData;
        this.stakeholderService
          .createStakeholder(remainingData)
          .subscribe((res) => {
            this.openSnackBar("Stakeholder added successfully..!");
            this.loadStakeholders();
          });
      }
    });
  }

  loadStakeholders(): void {
    this.stakeholderService.getStakeholders().subscribe((res) => {
      this.stakeholders = res as StakeholderModel[];
      this.dataSource = new MatTableDataSource<StakeholderModel>(
        this.stakeholders
      );
    });
  }

  deleteStakeholder(id: string): void {
    this.stakeholderService.deleteStakeholder(id).subscribe((res) => {
      this.openSnackBar("Stakeholder deleted successfully..!");
      this.loadStakeholders();
    });
  }

  editStakeholder(id: string): void {
    const vanData = this.stakeholders.find((t) => t.stakeholder_id === id);
    const dialogRef = this.dialog.open(CreateStakeholderComponent, {
      width: "800px",
      data: vanData,
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        this.stakeholderService
          .updateStakeholder(id, formData)
          .subscribe((res) => {
            this.openSnackBar("Stakeholder updated successfully..!");
            this.loadStakeholders();
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

export class StakeholderModel {
  stakeholder_id = "";
  stakeholder_name = "";
  type = "";
  phone = "";
  email = "";
  address_line1 = "";
  address_line2 = "";
  city = "";
  state = "";
  zip_code = "";
  thumnail_url = "";
}
