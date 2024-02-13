import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-slider-item',
  templateUrl: './main-slider-item.component.html',
  styleUrl: './main-slider-item.component.scss'
})
export class MainSliderItemComponent {
  @Input() slide! : string;
}
