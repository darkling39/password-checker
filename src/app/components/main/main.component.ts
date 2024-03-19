import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  currentPass: string;
  hiddenForm = true;
  passForm: FormGroup;
  ngOnInit() {
    setTimeout(() => {
      this.hiddenForm = false;
    }, 1000);
    this.passForm = this.fb.group({
      password: ['', [Validators.minLength(8), Validators.required]],
    });
    this.passForm.valueChanges.subscribe(
      (pass) => (this.currentPass = pass.password)
    );
  }
}
