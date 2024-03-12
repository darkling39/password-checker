import {AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements AfterViewInit{
  hidden = true
  ngAfterViewInit(){
    setTimeout(() => {
      this.hidden = false
    }, 1000)
}
}
