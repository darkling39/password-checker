import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  hiddenForm = true;
  passForm: FormGroup;

  ngOnInit() {
    setTimeout(() => {
      this.hiddenForm = false;
    }, 1000);

    this.passForm = this.fb.group({
      password: ['']
    });
    this.passForm.valueChanges.subscribe(pass => {console.log(pass.password);
    })
  }
  // updateQuality() {
  //   const inputPass = this.passForm.get('password');
  //   if (this.passForm.controls['password']?.errors?.['minlength']) {
  //     this.passQuality = 'little';
  //   } else if (
  //     inputPass?.value?.match(/[a-zA-Z]/) &&
  //     inputPass?.value?.match(/[0-9]/) &&
  //     inputPass?.value?.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)
  //   ) {
  //     this.passQuality = 'strong';
  //   } else if (
  //     (inputPass?.value?.match(/[a-zA-Z]/) && inputPass?.value?.match(/[0-9]/)) ||
  //     (inputPass?.value?.match(/[a-zA-Z]/) && inputPass?.value?.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)) ||
  //     (inputPass?.value?.match(/[0-9]/) && inputPass?.value?.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/))
  //   ) {
  //     this.passQuality = 'medium';
  //   } else if (!inputPass?.value) {
  //     this.passQuality = 'absent';
  //   } else {
  //     this.passQuality = 'weak';
  //   }
  // }
}
