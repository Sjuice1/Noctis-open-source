import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrl: './third-section.component.scss'
})
export class ThirdSectionComponent {
  firstSlides : Array<string> = [
    'assets/logo-1.png',
    'assets/logo-2.png',
    'assets/logo-3.png',
    'assets/logo-4.png',
    'assets/logo-5.png',
    'assets/logo-6.png',

  ]
  secondSlides : Array<string> = [
    'assets/logo-7.png',
    'assets/logo-8.png',
    'assets/logo-9.png',
    'assets/logo-10.png',
    'assets/logo-11.png',
    'assets/logo-12.png'
  ]

  swiperConfig: SwiperOptions = {
    
    injectStyles:[
      `
      .swiper-wrapper {
        -webkit-transition-timing-function:linear!important; 
        -o-transition-timing-function:linear!important;
        transition-timing-function:linear!important; 
      }
      `
    ]
  }

}
