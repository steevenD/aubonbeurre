import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {API} from "../../env/env";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LinearGraphAutomateService {

  constructor(private fb: FormBuilder, private http:HttpClient) { }


  generateformSearchInfoAutomate() {
    return this.fb.group({
      'uniteAutomate': new FormControl(null, [Validators.required]),
      'numeroAutomate': new FormControl(null, [Validators.required])
    });
  }

  getAllDonnees(unite: number, numero: number) {
    return this.http.get(`${API}/getDonnees/${unite}/${numero}`)
  }
}
