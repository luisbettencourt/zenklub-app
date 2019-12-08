import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { ProfessionalService } from "./../../../shared/services/professional.service";
@Component({
  selector: "app-professional",
  templateUrl: "./professional.component.html",
  styleUrls: ["./professional.component.scss"]
})
export class ProfessionalComponent {
  professionalId: any;
  professional$: Observable<any>;
  otherProfessionals$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private professionalService: ProfessionalService
  ) {
    this.route.params.subscribe(params => {
      this.professionalId = params["id"];
      this.professional$ = this.professionalService.getProfessionalById(
        this.professionalId
      );
      this.otherProfessionals$ = this.professionalService.getProfessionals({
        where: {
          id: { neq: this.professionalId }
        }
      });
    });
  }
}
