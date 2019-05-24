import {Component, OnInit} from '@angular/core';
import {AppService} from "./all-automates/services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Au bon beurre';

  constructor(private appService: AppService){

  }

  ngOnInit(): void {
  }
}
