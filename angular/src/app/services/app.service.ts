import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, Validator, Validators} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {API} from "../env/env";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private fb: FormBuilder, private http:HttpClient) { }

  generateformSearchInfoAutomate() {
    return this.fb.group({
      'uniteAutomate': new FormControl(null, [Validators.required]),
      'numeroAutomate': new FormControl(null, [Validators.required])
    });
  }

  getAllDonnees(unite: number, numero: number) {
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('unite', unite.toString());
    params = params.append('numero', numero.toString());
    console.log(params);
    return this.http.get(`${API}/getDonnees/${unite}/${numero}`)
  }
}
