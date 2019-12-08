import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ProfessionalListComponent } from "./professional-list.component";

import { ProfessionalInfoModule } from "./../professional-info/professional-info.module";

@NgModule({
  imports: [CommonModule, RouterModule, ProfessionalInfoModule],
  declarations: [ProfessionalListComponent],
  exports: [ProfessionalListComponent]
})
export class ProfessionalListModule {}
