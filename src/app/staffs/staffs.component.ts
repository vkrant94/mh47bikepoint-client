import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { StaffService } from "../_services/staff.service";
import { CreateStaffComponent } from "./create-staff/create-staff.component";
import { CommonService } from "../_services/common.service";

@Component({
  selector: "app-staffs",
  templateUrl: "./staffs.component.html",
  styleUrls: ["./staffs.component.css"],
})
export class StaffsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "first_name",
    "last_name",
    "phone",
    "email",
    "address_line1",
    "address_line2",
    "city",
    "state",
    "active",
    "store_name",
    "designation",
    "manager_name",
    "actions",
  ];
  staffs: StaffModel[] = [];
  dataSource = new MatTableDataSource<StaffModel>(this.staffs);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private staffService: StaffService,
    private _snackBar: MatSnackBar,
    private commonService: CommonService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadStaffs();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateStaffComponent, {
      width: "800px",
      data: new StaffModel(),
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        let staffFormData = this.commonService.filterObject(formData);
        this.staffService.createStaff(staffFormData).subscribe((res) => {
          this.openSnackBar("Staff added successfully..!");
          this.loadStaffs();
        });
      }
    });
  }

  loadStaffs(): void {
    this.staffService.getStaffs().subscribe((res) => {
      this.staffs = res as StaffModel[];
      this.dataSource = new MatTableDataSource<StaffModel>(this.staffs);
    });
  }

  deleteStaff(id: string): void {
    this.staffService.deleteStaff(id).subscribe((res) => {
      this.openSnackBar("Staff deleted successfully..!");
      this.loadStaffs();
    });
  }

  editStaff(id: string): void {
    const vanData = this.staffs.find((t) => t.staff_id === id);
    const dialogRef = this.dialog.open(CreateStaffComponent, {
      width: "800px",
      data: vanData,
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        this.staffService.updateStaff(id, formData).subscribe((res) => {
          this.openSnackBar("Staff updated successfully..!");
          this.loadStaffs();
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

export class StaffModel {
  staff_id = "";
  first_name = "";
  last_name = "";
  phone = "";
  email = "";
  address_line1 = "";
  address_line2 = "";
  city = "";
  state = "";
  active = "";
  store_id = "";
  designation = "";
  manager_id = "";
  thumnail_url = "";
}
