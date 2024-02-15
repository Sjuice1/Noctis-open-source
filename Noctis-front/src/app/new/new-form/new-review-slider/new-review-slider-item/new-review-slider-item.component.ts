import { Component, Input } from '@angular/core';
import { Review } from '../new-review-model';

@Component({
  selector: 'app-new-review-slider-item',
  templateUrl: './new-review-slider-item.component.html',
  styleUrl: './new-review-slider-item.component.scss'
})
export class NewReviewSliderItemComponent {
@Input() slide! : Review;
}
