import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProfessionalService } from "./../../shared/services/professional.service";

@Component({
  selector: "app-professionals",
  templateUrl: "./professionals.component.html",
  styleUrls: ["./professionals.component.scss"]
})
export class ProfessionalsComponent {
  professionals$: Observable<any>;

  constructor(private professionalService: ProfessionalService) {
    this.professionals$ = this.professionalService.getProfessionals("");
  }
}
