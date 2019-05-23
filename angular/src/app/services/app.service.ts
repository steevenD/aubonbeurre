import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, Validator, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private fb: FormBuilder) { }

  generateformSearchInfoAutomate() {
    return this.fb.group({
      'uniteAutomate': new FormControl(null, [Validators.required]),
      'numeroAutomate': new FormControl(null, [Validators.required])
    });
  }
}
