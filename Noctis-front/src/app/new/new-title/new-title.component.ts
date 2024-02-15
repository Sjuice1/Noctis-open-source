import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-title',
  templateUrl: './new-title.component.html',
  styleUrl: './new-title.component.scss',
  animations: [
    trigger('titleAppear',[
      transition('void => *',[
        animate(25000,keyframes([
          style({
            opacity : '0',
            fontSize : '3vw',
            offset : 0
          }),
          style({
            opacity : '1',
            fontSize : '3.03vw',
            offset : 0.02,
          }),
          style({
            opacity : '1',
            fontSize : '4vw',
            offset : 1,
          })
        ]))
      ])
    ])
  ]
})
export class NewTitleComponent {

}
