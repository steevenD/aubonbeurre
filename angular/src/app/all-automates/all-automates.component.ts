import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from '../services/app.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-automates',
  templateUrl: './all-automates.component.html',
  styleUrls: ['./all-automates.component.css']
})
export class AllAutomatesComponent implements OnInit {

  fGroup: FormGroup;

  indice: string = null;
  unitsData: any[];

  refresh = true;
  donnees = [
    {name: "Température cuve", value: "tempCuve"},
    {name: "Température extérieure", value: "tempExt"},
    {name: "Poids du lait en cuve", value: "poidsLait"},
    {name: "Poids du produit fini réalisé", value: "poidsLait"},
    {name: "Mesure pH", value: "mesurePH"},
    {name: "Mesure K+", value: "mesureK"},
    {name: "Concentration NaCl", value: "concentrationNaCl"},
    {name: "Niveau bactérien : Salmonelle", value: "niveauBacterienSalmonelle"},
    {name: "Niveau bactérien : E-coli", value: "niveauBacterienEcoli"},
    {name: "Niveau bactérien : Listeria", value: "niveauBacterienLicteria"},
  ];

  constructor(private api: AppService, private fb: FormBuilder) { }

  ngOnInit() {
    this.fGroup = this.fb.group({
      'donneeIndice': new FormControl(null, [Validators.required])
    });

    setInterval(() => {
      this.refresh = true;
      this.loadData();
    },10000)


    this.unitsData = [
      [{"name": "automate 01", "value": 10},{"name": "automate 02", "value": 5},{"name": "automate 03", "value": 15}],
      [{"name": "automate 01", "value": 10},{"name": "automate 02", "value": 5},{"name": "automate 03", "value": 15}]
    ];
  }
  
  loadData(){
    if(this.refresh && this.fGroup.get('donneeIndice').value){
      this.indice = this.fGroup.get('donneeIndice').value
      this.api.getAllAutomatesDonnees(this.indice).subscribe((data) => {
        console.log(data);
      },
      error => {});
    }
  }

}
