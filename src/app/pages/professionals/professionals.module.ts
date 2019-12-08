import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfessionalsComponent } from "./professionals.component";

import { routing } from "./professionals-routing.module";
import { RouterModule } from "@angular/router";

import { ProfessionalComponent } from "./professional/professional.component";
import { ProfessionalListModule } from "./../../shared/professional-list/professional-list.module";
import { ProfessionalInfoModule } from "./../../shared/professional-info/professional-info.module";
import { TimeTableModule } from "./../../shared/time-table/time-table.module";

@NgModule({
  imports: [
    CommonModule,
    routing,
    RouterModule,
    ProfessionalListModule,
    ProfessionalInfoModule,
    TimeTableModule
  ],
  declarations: [ProfessionalsComponent, ProfessionalComponent]
})
export class ProfessionalsModule {}
