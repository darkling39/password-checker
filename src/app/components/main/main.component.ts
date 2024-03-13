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
  
  updateQuality() {
    const inputPass = this.passForm.get('password');
    if (this.passForm.controls['password']?.errors?.['minlength']) {
      this.passQuality = 'little';
    } else if (
      inputPass?.value?.match(/[a-zA-Z]/) &&
      inputPass?.value?.match(/[0-9]/) &&
      inputPass?.value?.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)
    ) {
      this.passQuality = 'strong';
    } else if (
      (inputPass?.value?.match(/[a-zA-Z]/) && inputPass?.value?.match(/[0-9]/)) ||
      (inputPass?.value?.match(/[a-zA-Z]/) && inputPass?.value?.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)) ||
      (inputPass?.value?.match(/[0-9]/) && inputPass?.value?.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/))
    ) {
      this.passQuality = 'medium';
    } else if (!inputPass?.value) {
      this.passQuality = 'absent';
    } else {
      this.passQuality = 'weak';
    }
  }
}
