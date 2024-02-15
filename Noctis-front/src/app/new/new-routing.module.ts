import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NewComponent } from "./new.component";

export const routes : Routes = [
    {path : '', component : NewComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class NewRoutinModule{}