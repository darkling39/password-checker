import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  hiddenForm = true;
  passForm: FormGroup;
  inputPass: string;
  passQuality = '';
  ngOnInit() {
    setTimeout(() => {
      this.hiddenForm = false;
    }, 1000);

    this.passForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  updateStrength() {
    if (this.passForm.controls['password']?.errors?.['minlength']) {
      this.passQuality = 'little';
    } else if (
      this.passForm.get('password')?.value?.match(/[a-zA-Z]/) &&
      this.passForm.get('password')?.value?.match(/[0-9]/) &&
      this.passForm.get('password')?.value?.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)
    ) {
      this.passQuality = 'strong';
    } else if (
      (this.passForm.get('password')?.value?.match(/[a-zA-Z]/) && this.passForm.get('password')?.value?.match(/[0-9]/)) ||
      (this.passForm.get('password')?.value?.match(/[a-zA-Z]/) && this.passForm.get('password')?.value?.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)) || 
      (this.passForm.get('password')?.value?.match(/[0-9]/) &&this.passForm.get('password')?.value?.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/))
    ) {
      this.passQuality = 'medium';
    } 
    else if(!this.passForm.get('password')?.value){
      this.passQuality = 'absent'
    } else {
      this.passQuality = 'weak';
    }
  }
}
