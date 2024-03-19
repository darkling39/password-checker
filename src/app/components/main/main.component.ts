import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('hiddenState', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('500ms 500ms ease-in', style({opacity: 1}))
      ])
  ])]
})
export class MainComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  state = 'hidden'
  currentPass: string;
  passForm: FormGroup;
  ngOnInit() {
    this.passForm = this.fb.group({
      password: ['', [Validators.minLength(8), Validators.required]],
    });
    this.passForm.valueChanges.subscribe(
      (pass) => (this.currentPass = pass.password)
    );
  }
}
