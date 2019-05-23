import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, Validator, Validators} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {API} from "../env/env";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private fb: FormBuilder, private http:HttpClient) { }
}
