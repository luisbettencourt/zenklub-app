import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProfessionalInfoComponent } from "./professional-info.component";

import { RatingModule } from "ngx-bootstrap/rating";

@NgModule({
  imports: [CommonModule, FormsModule, RatingModule.forRoot()],
  declarations: [ProfessionalInfoComponent],
  exports: [ProfessionalInfoComponent]
})
export class ProfessionalInfoModule {}
