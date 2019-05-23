import {Component, OnInit} from '@angular/core';
import {AppService} from "./services/app.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Au bon beurre';

  unites = [1,2,3,4,5];
  numeros = this.unites.concat([6,7,8,9,10]);
  fGroup: FormGroup;

  constructor(private appService: AppService){

  }

  ngOnInit(): void {
    this.fGroup = this.appService.generateformSearchInfoAutomate();

    this.fGroup.valueChanges.subscribe(() => {
      console.log(this.fGroup.value);
    });
  }
}
