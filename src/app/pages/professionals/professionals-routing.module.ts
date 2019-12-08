import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfessionalsComponent } from "./professionals.component";
import { ProfessionalComponent } from "./professional/professional.component";

const routes: Routes = [
  {
    path: "",
    component: ProfessionalsComponent
  },
  {
    path: "professional/:id",
    component: ProfessionalComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
