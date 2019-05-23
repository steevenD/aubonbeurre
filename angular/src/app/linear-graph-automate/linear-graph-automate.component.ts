import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {$e} from "codelyzer/angular/styles/chars";
import {FormGroup} from "@angular/forms";
import {LinearGraphAutomateService} from "./service/linear-graph-automate.service";
import {BehaviorSubject, interval, Subscription, timer} from 'rxjs';
import {take} from "rxjs/operators";

@Component({
  selector: 'app-linear-graph-automate',
  templateUrl: './linear-graph-automate.component.html',
  styleUrls: ['./linear-graph-automate.component.css']
})
export class LinearGraphAutomateComponent implements OnInit {


  fGroup: FormGroup;
  go = new BehaviorSubject(false);
  go$ = this.go.asObservable();

  refresh = true;
  unites = [1,2,3,4,5];
  numeros = this.unites.concat([6,7,8,9,10]);

  data: any;

  constructor(private linearService: LinearGraphAutomateService,
              private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.fGroup = this.linearService.generateformSearchInfoAutomate();

    setInterval(() => {
      this.refresh = true;
      this.loadData();
    },10000)
  }

  loadData(){

      if(this.refresh && this.fGroup.get('numeroAutomate').value){
        this.linearService.getAllDonnees(this.fGroup.get('uniteAutomate').value, this.fGroup.get('numeroAutomate').value)
          .subscribe(data => {
            this.data = data;
            console.log(this.data);
            this.initGraph();
            this.refresh = false;
          });
      }

  }

  initGraph(){
      this.initGraphTemperature();
  }

  initGraphTemperature() {
    let toReturnTempCave = [];

    if(this.data.donnes.length > 60) {
      this.data.donnes = this.data.donnes.slice(this.data.donnes.length - 60, this.data.donnes.length);
    }
    for (let i = 0; i < this.data.donnes.length; i++) {
      toReturnTempCave.push({
        "value": this.data.donnes[i].tempCuve,
        "name": i
      });
    }
    return toReturnTempCave;
  }
}
