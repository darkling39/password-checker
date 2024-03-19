import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DiffService } from 'src/app/services/diff.service';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.css']
})
export class DifficultyComponent implements OnChanges {
  @Input() pass: string
  @Input() form: FormGroup
  passQuality:string

  constructor(private difficultService:DiffService){}

  ngOnChanges(changes: SimpleChanges): void {
    this.passQuality = this.difficultService.updateQuality(this.form, this.passQuality)
    console.log(this.passQuality);
    
  }
}
