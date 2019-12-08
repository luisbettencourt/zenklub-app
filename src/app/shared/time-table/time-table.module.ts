import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TimeTableComponent } from "./time-table.component";

import { CarouselModule } from "ngx-owl-carousel-o";
import { ButtonsModule } from "ngx-bootstrap/buttons";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    ButtonsModule.forRoot()
  ],
  declarations: [TimeTableComponent],
  exports: [TimeTableComponent]
})
export class TimeTableModule {}
