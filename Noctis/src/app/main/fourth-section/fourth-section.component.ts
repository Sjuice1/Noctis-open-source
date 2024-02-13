import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fourth-section',
  templateUrl: './fourth-section.component.html',
  styleUrl: './fourth-section.component.scss',
  animations: [
    trigger('nAppear',[
      transition('void => *', [
        style({
          opacity : 0
        }),
        animate(1000,style({
          opacity : 0
        })),
        animate(500,keyframes([
        style({
          opacity: 0,
          offset: 0
        }),
        style({
          opacity: 0.5,
          offset: 0.5
        }),
        style({
          opacity: 0.8,
          offset: 0.8
        }),
        style({
          opacity: 1,
          offset: 1
        })]))
      ])
    ]
    ),
    trigger('oAppear',[
      transition('void => *', [
        style({
          opacity : 0
        }),
        animate(1500,style({
          opacity : 0
        })),
        animate(500,keyframes([
        style({
          opacity: 0,
          offset: 0
        }),
        style({
          opacity: 0.5,
          offset: 0.5
        }),
        style({
          opacity: 0.8,
          offset: 0.8
        }),
        style({
          opacity: 1,
          offset: 1
        })]))
      ])
    ]
    ),
    trigger('cAppear',[
      transition('void => *', [
        style({
          opacity : 0
        }),
        animate(500,style({
          opacity : 0
        })),
        animate(500,keyframes([
        style({
          opacity: 0,
          offset: 0
        }),
        style({
          opacity: 0.5,
          offset: 0.5
        }),
        style({
          opacity: 0.8,
          offset: 0.8
        }),
        style({
          opacity: 1,
          offset: 1
        })]))
      ])
    ]
    ),
    trigger('tAppear',[
      transition('void => *', [
        style({
          opacity : 0
        }),
        animate(750,style({
          opacity : 0
        })),
        animate(500,keyframes([
        style({
          opacity: 0,
          offset: 0
        }),
        style({
          opacity: 0.5,
          offset: 0.5
        }),
        style({
          opacity: 0.8,
          offset: 0.8
        }),
        style({
          opacity: 1,
          offset: 1
        })]))
      ])
    ]
    ),
    trigger('iAppear',[
      transition('void => *', [
        style({
          opacity : 0
        }),
        animate(1750,style({
          opacity : 0
        })),
        animate(500,keyframes([
        style({
          opacity: 0,
          offset: 0
        }),
        style({
          opacity: 0.5,
          offset: 0.5
        }),
        style({
          opacity: 0.8,
          offset: 0.8
        }),
        style({
          opacity: 1,
          offset: 1
        })]))
      ])
    ]),
    trigger('sAppear',[
      transition('void => *', [
        style({
          opacity : 0
        }),
        animate(2000,style({
          opacity : 0
        })),
        animate(500,keyframes([
        style({
          opacity: 0,
          offset: 0
        }),
        style({
          opacity: 0.5,
          offset: 0.5
        }),
        style({
          opacity: 0.8,
          offset: 0.8
        }),
        style({
          opacity: 1,
          offset: 1
        })]))
      ])
    ]),
    trigger('btnAppear',[
      transition('void => *', [
        style({
          opacity : 0
        }),
        animate(2500,style({
          opacity : 0
        })),
        animate(500,keyframes([
        style({
          opacity: 0,
          offset: 0
        }),
        style({
          opacity: 0.5,
          offset: 0.5
        }),
        style({
          opacity: 0.8,
          offset: 0.8
        }),
        style({
          opacity: 1,
          offset: 1
        })]))
      ])
    ])
  ]
})
export class FourthSectionComponent {

  @ViewChild('section', { static: true }) section!: ElementRef;
  inTheViewport = false;
  

  onScroll() {
    if (this.inTheViewport) {
      return;
    }
    const bounding = this.section.nativeElement.getBoundingClientRect();
    const windowScrollPosition = window.scrollY;

    if (
      bounding.top >= 0 &&
      bounding.top <= window.innerHeight + windowScrollPosition - 500
    ) {
      this.inTheViewport = true;
    }
    return;
  }
}
