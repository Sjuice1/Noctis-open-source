import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss',
  animations: [
    trigger('imageAppear',[
      transition('void => *', [
        style({
          opacity : 0
        }),
        animate(500,style({
          opacity : 0
        })),
        animate(1000,keyframes([
        style({
          opacity: 0,
          transform: 'perspective(1000px) rotateX(7deg) rotateY(-30deg) translateX(100px)',
          offset: 0
        }),
        style({
          opacity: 0.5,
          transform: 'perspective(1000px) rotateX(7deg) rotateY(-30deg) translateX(50px)',
          offset: 0.5
        }),
        style({
          opacity: 0.8,
          transform: 'perspective(1000px) rotateX(7deg) rotateY(-30deg) translateX(20px)',
          offset: 0.8
        }),
        style({
          opacity: 1,
          transform: 'perspective(1000px) rotateX(7deg) rotateY(-30deg) translateX(0px)',
          offset: 1
        })]))
      ])
    ]
    ),
    trigger('titleAppear',[
      transition('void => *', [
        animate(750,keyframes([
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
          offset: 0
        }),
        style({
          opacity: 0.5,
          transform: 'translateX(-50px)',
          offset: 0.5
        }),
        style({
          opacity: 0.8,
          transform: 'translateX(-20px)',
          offset: 0.8
        }),
        style({
          opacity: 1,
          transform: 'translateX(0px)',
          offset: 1
        })]))
      ])
    ]
    ),
    trigger('descriptionAppear',[
      transition('void => *', [
        style({
          opacity : 0
        }),
        animate(250,style({
          opacity : 0
        })),
        animate(750,keyframes([
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
          offset: 0
        }),
        style({
          opacity: 0.5,
          transform: 'translateX(-50px)',
          offset: 0.5
        }),
        style({
          opacity: 0.8,
          transform: 'translateX(-20px)',
          offset: 0.8
        }),
        style({
          opacity: 1,
          transform: 'translateX(0px)',
          offset: 1
        })]))
      ])
    ]
    )
  ]
})
export class FirstSectionComponent {
  @ViewChild('section', { static: true }) section!: ElementRef;
  inTheViewport = false;
  

  onScroll() {
    if(this.inTheViewport){
      return;
    }
    const bounding = this.section.nativeElement.getBoundingClientRect();
    if (
      bounding.top >= 0       
    ) {
     this.inTheViewport = true;
    }
    return;
  }
}
