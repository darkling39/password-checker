import { Component, Input } from '@angular/core';
import { DiffService } from 'src/app/services/diff.service';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.css']
})
export class DifficultyComponent {

  constructor(private difficultService:DiffService){}
  
}
