import { RouterModule } from "@angular/router";
import { NewComponent } from "./new.component";
import { CommonModule } from "@angular/common";
import { NewRoutinModule } from "./new-routing.module";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { NewFormComponent } from './new-form/new-form.component';
import { NewTitleComponent } from './new-title/new-title.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NewReviewSliderComponent } from './new-form/new-review-slider/new-review-slider.component';
import { NewReviewSliderItemComponent } from './new-form/new-review-slider/new-review-slider-item/new-review-slider-item.component';
import { SharedModule } from "../shared/shared.module";
import { SwiperDirective } from "../shared/main-slider.directive";

@NgModule({
    declarations: [
     NewComponent,
     NewFormComponent,
     NewTitleComponent,
     NewReviewSliderComponent,
     NewReviewSliderItemComponent,
    ],
    imports: [
      RouterModule,
      NewRoutinModule,
      ReactiveFormsModule,
      SharedModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
  })
  export class NewModule { }
  