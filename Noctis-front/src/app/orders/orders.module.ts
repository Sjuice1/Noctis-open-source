import { RouterModule } from "@angular/router";
import { OrdersComponent } from "./orders.component";
import { CommonModule } from "@angular/common";
import { OrdersRoutinModule } from "./order-routing.module";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
     OrdersComponent
    ],
    imports: [
      RouterModule,
      CommonModule,
      OrdersRoutinModule,
    ],
    providers: [],
  })
  export class OrdersModule { }
  