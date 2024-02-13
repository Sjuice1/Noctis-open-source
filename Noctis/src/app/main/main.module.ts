import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "@angular/common";
import { MainSliderComponent } from "./main-slider/main-slider.component";
import { MainSliderItemComponent } from "./main-slider/main-slider-item/main-slider-item.component";
import { MainComponent } from "./main.component";
import { SwiperDirective } from "./main-slider/main-slider.directive";
import { ThumbnailSliderItemComponent } from './main-slider/thumbnail-slider-item/thumbnail-slider-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { FirstSliderItemComponent } from './third-section/first-slider-item/first-slider-item.component';
import { SecondSliderItemComponent } from './third-section/second-slider-item/second-slider-item.component';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { MainRoutinModule } from "./main-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
      MainSliderComponent,
      MainSliderItemComponent,
      MainComponent,
      SwiperDirective,
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
      CommonModule,
      MainRoutinModule,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class MainModule { }
  