import { Component, Input } from "@angular/core";

@Component({
  selector: "app-professional-list",
  templateUrl: "./professional-list.component.html",
  styleUrls: ["./professional-list.component.scss"]
})
export class ProfessionalListComponent {
  @Input() professionals: any;
  @Input() small = false;

  constructor() {}
}
