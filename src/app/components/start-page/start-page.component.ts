import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  animations: [
    trigger('hiddenState', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('500ms 500ms ease-in', style({opacity: 1}))
      ])
  ]),
  trigger('hiddenState2', [
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('500ms 1000ms ease-in', style({opacity: 1}))
    ])
])]
})
export class StartPageComponent{
  
  constructor(private router:Router){}

  toMain(){
      this.router.navigate(['main'])
  }
}
