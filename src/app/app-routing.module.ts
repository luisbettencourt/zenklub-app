import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    data: {
      meta: {
        title: "Zenklub",
        description: "Psichology"
      }
    },
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "professionals"
      },
      {
        path: "professionals",
        loadChildren:
          "./pages/professionals/professionals.module#ProfessionalsModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
