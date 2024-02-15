import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Review } from './new-review-model';
import Swiper from 'swiper';

@Component({
  selector: 'app-new-review-slider',
  templateUrl: './new-review-slider.component.html',
  styleUrl: './new-review-slider.component.scss'
})
export class NewReviewSliderComponent {
  @ViewChild('swiper',{static : true}) swiper! : ElementRef;

  slides : Array<Review> = [
    new Review('Asure','Adam Orsi, VP Of Development',`
    “They’re great at communicating about technical concepts."`),
    new Review('Shanks','Bruce Spidel, Owner',`
    “They have great project management skills and there haven't been any problems with onboarding"`),
    new Review('Kosa','Charles Sakkal, Founder',`
    “Noctis is honest and straightforward. They’re a good partner to work with.”`)
  ]

}
