import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-mh-input",
  templateUrl: "./mh-input.component.html",
  styleUrls: ["./mh-input.component.css"],
})
export class MhInputComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() control!: FormControl;
  @Input() label: string = "";
  @Input() type: string = "text";
  @Input() visible: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
