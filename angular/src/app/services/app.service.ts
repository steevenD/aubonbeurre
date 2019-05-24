import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, Validator, Validators} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {API} from "../env/env";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private fb: FormBuilder, private http:HttpClient) { }
  
  getAllAutomatesDonnees(donnee: string) {
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('donnee', donnee);
    console.log(params);
    return this.http.get(`${API}/getAllDonnees/${donnee}`)
  }
}
