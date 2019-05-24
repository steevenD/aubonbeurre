import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unit-graph',
  templateUrl: './unit-graph.component.html',
  styleUrls: ['./unit-graph.component.css']
})
export class UnitGraphComponent implements OnInit {

  @Input() data: any;
  
  view: number[];
  dataMin: number;
  dataMax: number;
  dataSegmentBig: number;
  colorScheme = {
    domain: ['#ff0000', '#ff00ff', '#0000ff', '#00ffff', '#00ff00', '#ffff00']
  };
  units: string;
  valueFormatting = () => {
    let average = 0;
    this.data.forEach(element => {
      average = average + element.value;
    });
    return "Moyenne : " + (average / this.data.length).toFixed(2)
  };
  
  constructor() { }

  ngOnInit() {
    this.units = "degré celsius";

    this.checkDataOptions();
  }

  checkDataOptions(){
    this.dataMax = 20;
    this.dataMin = 0;
    this.dataSegmentBig = 5 % (this.dataMax - this.dataMin);
  }


}
