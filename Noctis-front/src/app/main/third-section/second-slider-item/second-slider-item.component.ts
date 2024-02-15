import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-slider-item',
  templateUrl: './second-slider-item.component.html',
  styleUrl: './second-slider-item.component.scss'
})
export class SecondSliderItemComponent {
  @Input() slide! : string;

}
