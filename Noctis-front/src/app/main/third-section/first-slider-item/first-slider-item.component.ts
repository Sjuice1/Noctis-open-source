import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-slider-item',
  templateUrl: './first-slider-item.component.html',
  styleUrl: './first-slider-item.component.scss'
})
export class FirstSliderItemComponent {
  @Input() slide! : string;
}
