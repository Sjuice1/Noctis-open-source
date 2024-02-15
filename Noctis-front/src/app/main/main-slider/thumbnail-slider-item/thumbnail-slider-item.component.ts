import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail-slider-item',
  templateUrl: './thumbnail-slider-item.component.html',
  styleUrl: './thumbnail-slider-item.component.scss'
})
export class ThumbnailSliderItemComponent {
  @Input() slide! : string; 

  onEnd(video : HTMLVideoElement){
    video.currentTime = 0.034;
    video.play()
  }
 
}
