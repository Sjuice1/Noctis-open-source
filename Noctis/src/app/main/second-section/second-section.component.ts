import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.scss',
  animations: [
    trigger('appStoreAppear',[
      transition('void => *', [
        animate(1000,keyframes([
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
    trigger('googlePlayAppear',[
      transition('void => *', [
        style({
          opacity : 0
        }),
        animate(1000,style({
          opacity : 0
        })),
        animate(750,keyframes([
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
    trigger('titleAppear',[
      transition('void => *', [
        animate(3500,keyframes([
        style({
          opacity: 0,
          transform: 'translateX(250px)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'translateX(150px)',
          offset: 0.3
        }),
        style({
          opacity: 1,
          transform: 'translateX(35px)',
          offset: 0.7
        }),
        style({
          transform: 'translateX(5px)',
          offset: 0.9
        }),
        style({
          transform: 'translateX(0px)',
          offset: 1
        })]))
      ])
    ]
    ),
    trigger('descriptionAppear',[
      transition('void => *', [
        animate(3000,keyframes([
        style({
          opacity: 0,
          transform: 'translateX(100px)',
          offset: 0
        }),
        style({
          opacity: 0.5,
          transform: 'translateX(50px)',
          offset: 0.5
        }),
        style({
          opacity: 0.8,
          transform: 'translateX(20px)',
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
    trigger('separatorAppear',[
      transition('void => *', [
        style({
          opacity : 0
        }),
        animate(1600,style({
          opacity : 0
        })),
        animate(500,keyframes([
        style({
          opacity: 0,
          transform: 'translateY(75px)',
          offset: 0
        }),
        style({
          opacity: 0.5,
          transform: 'translateY(50px)',
          offset: 0.5
        }),
        style({
          opacity: 0.8,
          transform: 'translateY(20px)',
          offset: 0.8
        }),
        style({
          opacity: 1,
          transform: 'translateXY0px)',
          offset: 1
        })]))
      ])
    ])
  ]
})
export class SecondSectionComponent {
  @ViewChild('section', { static: true }) section!: ElementRef;
  downloadCount: number = 4999945;
  formatedDownloadCount!: String;
  inTheViewport = false;

  increaseDownloadCount() {
    this.downloadCount++;

    this.formatedDownloadCount = this.downloadCount.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    if (this.downloadCount < 4999995) {
      setTimeout(this.increaseDownloadCount.bind(this), 35);
    } else {
      this.afterIncrease();
    }
  }

  afterIncrease() {
    setTimeout(() => {
      this.downloadCount++;
      this.formatedDownloadCount = this.downloadCount.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    },250),
    setTimeout(() => {
      this.downloadCount++;
      this.formatedDownloadCount = this.downloadCount.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    },500),
    setTimeout(() => {
      this.downloadCount++;
      this.formatedDownloadCount = this.downloadCount.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    },750),
    setTimeout(() => {
      this.downloadCount++;
      this.formatedDownloadCount = this.downloadCount.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    },1000),
    setTimeout(() => {
      this.downloadCount++;
      this.formatedDownloadCount = this.downloadCount.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    },1500)
  }

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
      this.increaseDownloadCount();
    }
    return;
  }
}
