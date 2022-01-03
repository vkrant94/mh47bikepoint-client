import { Component, Input, OnInit } from "@angular/core";
import { PicklistModel } from "src/app/_models/PicklistModel";

@Component({
  selector: "app-mh-select",
  templateUrl: "./mh-select.component.html",
  styleUrls: ["./mh-select.component.css"],
})
export class MhSelectComponent implements OnInit {
  @Input() label: string = "";
  @Input() id: string = "";
  @Input() control: any;
  @Input() formGroup: any;
  @Input() items: PicklistModel[] = [];
  constructor() {}

  ngOnInit(): void {}
}
