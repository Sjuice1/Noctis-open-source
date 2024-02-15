import { NgModule } from "@angular/core";
import { SwiperDirective } from "./main-slider.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
     SwiperDirective
    ],
    imports: [
      CommonModule
    ],
    exports: [
      SwiperDirective,
      CommonModule
    ]
  })
  export class SharedModule { }
  