import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild, ɵsetEnsureDirtyViewsAreAlwaysReachable } from '@angular/core';
import { SwiperContainer } from 'swiper/element';

import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.scss',
  animations:[
    trigger('swiperAppear',[
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(100px)'
        }),
        animate(1500)
      ])
    ]
    )
  ]
})
export class MainSliderComponent implements OnInit{

  titleState : String = "Animate"

  slidesImgs : Array<string> = [
    'assets/animation-emoji.png',
    'assets/cubes-emoji.png',
    'assets/design-emoji.png',
    'assets/development-emoji.png'
  ]
  slidesVideos : Array<string> = [
    'assets/videos/animation.mp4',
    'assets/videos/modeling.mp4',
    'assets/videos/design.mp4',
    'assets/videos/develop.mp4',
  ]
  @ViewChild('slider',{static:true}) slider! : ElementRef<SwiperContainer>
  @ViewChild('thumbSlider',{static:true}) thumbSlider! : ElementRef<SwiperContainer>


  ngOnInit(): void {    
    const s1 = this.slider.nativeElement.swiper;
    const s2 = this.thumbSlider.nativeElement.swiper;

    s1.controller.control = s2;
    s2.controller.control = s1;
  }
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides:true,
    autoplay : {
      delay: 2000
    }
  }

  swiperThumbConfig: SwiperOptions = {
    slidesPerView: 1
  }

  onChange(){
    setInterval(() => {
      switch( this.slider.nativeElement.swiper.realIndex){
        case 0:
          this.titleState = 'Animate'
          break;
        case 1:
          this.titleState = 'Model'
          break;
        case 2:
          this.titleState = 'Design'
          break;
        case 3:
          this.titleState = 'Develope'
          break;
      }
    },50)
    
  }

  

  

}
