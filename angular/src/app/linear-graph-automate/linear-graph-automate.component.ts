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

  dataTempCuve: any[];
  dataTempExt: any[];
  dataPoidsLait: any[];
  dataMesurePH: any[];
  dataMesureK: any[];
  dataConcentrationNaCl: any[];
  dataNiveauBacterienSalmonelle: any[];
  dataNiveauBacterienEcoli: any[];
  dataNiveauBacterienListeria: any[];

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
    alert('test');
      if(this.refresh && this.fGroup.get('numeroAutomate').value){
        this.initLoadData();
      }
  }

  initLoadData() {
    this.linearService.getAllDonnees(this.fGroup.get('uniteAutomate').value, this.fGroup.get('numeroAutomate').value)
      .subscribe(data => {
        this.data = data;
        this.initGraph();
        this.refresh = false;
      });
  }

  initGraph() {
    let toReturnTempCuve = [];
    let toReturnTempExt = [];
    let toReturnPoidsLait = [];
    let toReturnMesurePH = [];
    let toReturnMesureK = [];
    let toReturnConcentrationNaCl = [];
    let toReturnNiveauBacterienSalmonelle = [];
    let toReturnNiveauBacterienEcoli = [];
    let toReturnNiveauBacterienListeria = [];

    if(this.data.donnes.length > 60) {
      this.data.donnes = this.data.donnes.slice(this.data.donnes.length - 60, this.data.donnes.length);
    }
    for (let i = 0; i < this.data.donnes.length; i++) {
      toReturnTempCuve.push({
        "value":  this.data.donnes[i].tempCuve,
        "name": i
      });
      toReturnTempExt.push({
        "value":  this.data.donnes[i].tempExt,
        "name": i
      });
      toReturnPoidsLait.push({
        "value": this.data.donnes[i].poidsLait,
        "name": i
      });
      toReturnMesurePH.push({
        "value": this.data.donnes[i].mesurePH,
        "name": i
      });
      toReturnMesureK.push({
        "value": this.data.donnes[i].mesureK,
        "name": i
      });
      toReturnConcentrationNaCl.push({
        "value": this.data.donnes[i].concentrationNaCl,
        "name": i
      });
      toReturnNiveauBacterienSalmonelle.push({
        "value": this.data.donnes[i].niveauBacterienSalmonelle,
        "name": i
      });
      toReturnNiveauBacterienEcoli.push({
        "value": this.data.donnes[i].niveauBacterienEcoli,
        "name": i
      });
      toReturnNiveauBacterienListeria.push({
        "value": this.data.donnes[i].niveauBacterienListeria,
        "name": i
      })
    }
    this.dataTempCuve = toReturnTempCuve;
    this.dataTempExt = toReturnTempExt;
    this.dataPoidsLait = toReturnPoidsLait;
    this.dataMesurePH = toReturnMesurePH;
    this.dataMesureK = toReturnMesureK;
    this.dataConcentrationNaCl = toReturnConcentrationNaCl;
    this.dataNiveauBacterienSalmonelle = toReturnNiveauBacterienSalmonelle;
    this.dataNiveauBacterienEcoli = toReturnNiveauBacterienEcoli;
    this.dataNiveauBacterienListeria = toReturnNiveauBacterienListeria;
  }
}
