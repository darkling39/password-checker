import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements AfterViewInit{
  
  constructor(private router:Router){}

  hidden = true
  hiddenButton = true

  ngAfterViewInit(){
      setTimeout(() => {
        this.hidden = false
        setTimeout(() => {
          this.hiddenButton = false
        }, 1000)
      }, 1000)
  }

  toMain(){
      this.router.navigate(['main'])
  }
}
