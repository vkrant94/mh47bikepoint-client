import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { PicklistModel } from "src/app/_models/PicklistModel";

@Component({
  selector: "app-mh-select",
  templateUrl: "./mh-select.component.html",
  styleUrls: ["./mh-select.component.css"],
})
export class MhSelectComponent implements OnInit {
  @Input() label: string = "";
  @Input() id: string = "";
  @Input() formControl: any;
  @Input() formGroup: any;
  @Input() items: PicklistModel[] = [];
  constructor() {}

  ngOnInit(): void {}
}
