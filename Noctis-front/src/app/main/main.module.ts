import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainSliderComponent } from "./main-slider/main-slider.component";
import { MainSliderItemComponent } from "./main-slider/main-slider-item/main-slider-item.component";
import { MainComponent } from "./main.component";
import { ThumbnailSliderItemComponent } from './main-slider/thumbnail-slider-item/thumbnail-slider-item.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { FirstSliderItemComponent } from './third-section/first-slider-item/first-slider-item.component';
import { SecondSliderItemComponent } from './third-section/second-slider-item/second-slider-item.component';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { MainRoutinModule } from "./main-routing.module";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
      MainSliderComponent,
      MainSliderItemComponent,
      MainComponent,
      ThumbnailSliderItemComponent,
      FirstSectionComponent,
      SecondSectionComponent,
      ThirdSectionComponent,
      FirstSliderItemComponent,
      SecondSliderItemComponent,
      FourthSectionComponent
    ],
    imports: [
      RouterModule,
      MainRoutinModule,
      SharedModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class MainModule { }
  