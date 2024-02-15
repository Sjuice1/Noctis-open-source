import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { OrdersComponent } from "./orders.component";

export const routes : Routes = [
    {path : '', component : OrdersComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class OrdersRoutinModule{}